import React from 'react'
import { Redirect, RouteComponentProps } from '@reach/router'
import { css } from 'emotion'

import Calendar from 'src/components/Calendar'
import { CalendarDay } from 'src/components/dateHelpers'
import titlesService from 'src/services/titlesService'
import { SkeletonLine } from 'src/components/Skeleton'

type Props = {
  // Unfortunately Reach Router does not have proper support for typescript
  // But at least it works with this React version and not complaining about React Context
  // This is an ugly and temporary solution; In real world I'd have updated to the latest react
  // and switched to React Router
  year?: string
  month?: string
} & RouteComponentProps

type titlesGroupedDictionary = {
  [key: number]: Array<{
    id: string
    launchDate: string
    title: string
    dateUtc: number
  }>
}

type State = {
  titles: titlesGroupedDictionary
  loading: boolean
}

class TitlesCalendarScreen extends React.PureComponent<Props, State> {
  state: State = {
    titles: {},
    loading: true,
  }

  static fallbackRedirect() {
    const today = new Date()
    return <Redirect to={`/calendar/${today.getFullYear()}/${today.getMonth() + 1}`} noThrow />
  }

  static parseDateParams(
    yearParam: string = '',
    monthParam: string = '',
  ): { year: number; month: number } | void {
    const year = parseInt(yearParam || '', 10)
    const month = parseInt(monthParam || '', 10)
    const isInvalid =
      !Number.isInteger(year) ||
      !Number.isInteger(month) ||
      year < 1900 ||
      year > 2200 ||
      month < 1 ||
      month > 12

    return isInvalid ? undefined : { year, month }
  }

  // Clearly this will only work once and if we want to fetch when month changed, we need to make
  // extra calls in handleCalendarChange
  componentDidMount(): void {
    this.setState({ loading: true })
    titlesService
      .getTitles()
      .then(titles => {
        this.setState({ titles, loading: false })
      })
      .catch(() => {
        this.setState({ loading: false })
      })
  }

  renderDay = (day: CalendarDay) => {
    const group = this.state.titles[+day.utcDate]
    if (!group && this.state.loading) {
      return (
        <>
          <SkeletonLine />
          <SkeletonLine />
        </>
      )
    }

    if (!group) {
      return null
    }

    return (
      <ul className={e.titlesList}>
        {group.map(item => {
          return (
            <li key={item.id} className={e.titleItem} title={item.title}>
              {item.title}
            </li>
          )
        })}
      </ul>
    )
  }

  handleCalendarChange = (year: number, month: number) => {
    // reach router - why did you make navigate optional :shrug:?
    if (this.props.navigate) {
      this.props.navigate(`/calendar/${year}/${month + 1}`)
    }
  }

  render() {
    const params = TitlesCalendarScreen.parseDateParams(this.props.year, this.props.month)

    if (!params) {
      return TitlesCalendarScreen.fallbackRedirect()
    }

    return (
      <div style={{ width: '800px', margin: '0 auto' }}>
        <Calendar
          year={params.year}
          month={params.month - 1}
          renderDay={this.renderDay}
          onChange={this.handleCalendarChange}
        />
      </div>
    )
  }
}

const e = {
  titlesList: css`
    margin: 0;
    padding: 0;
    list-style: none;
  `,
  titleItem: css`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `,
}

export default TitlesCalendarScreen
