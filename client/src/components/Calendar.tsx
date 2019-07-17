import React from 'react'
import { css, cx } from 'emotion'
import { CalendarDay, generateCalendar, UTCDate } from './dateHelpers'
import memoize from 'lodash/memoize'

type Props = {
  year: number
  // month property uses the same JS Date Month format 0..11
  // still not sure which path to chose: follow JS date format or "human readable" format – since
  // this is a "public" prop of our component and it should easy to reason about
  month: number
  renderDay: (entry: CalendarDay) => React.ReactNode | null
  // Exposes only the API it consumes (year, month); Should be enough for our use case
  onChange?: (year: number, month: number) => void
}

type State = {
  utcDate: Date
}

const DAYS_OF_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const generateCalendarMemo = memoize(generateCalendar, (...args) => args.join(''))

function getUTCYearMonth(date: Date) {
  return [date.getUTCFullYear(), date.getUTCMonth()]
}

export class Calendar extends React.PureComponent<Props, State> {
  state = {
    utcDate: UTCDate(this.props.year, this.props.month),
  }

  changeMonth = (months: number) => () => {
    const utcDate = new Date(this.state.utcDate)
    utcDate.setUTCMonth(utcDate.getUTCMonth() + months)
    if (this.props.onChange) {
      const [year, month] = getUTCYearMonth(utcDate)
      this.props.onChange(year, month)
    }

    this.setState({ utcDate })
  }

  render() {
    const [year, month] = getUTCYearMonth(this.state.utcDate)
    const calendar = generateCalendarMemo(year, month)

    return (
      <div>
        <div className={s.header}>
          <button style={{width: '200px'}} onClick={this.changeMonth(-1)}>←</button>
          <div>
            {MONTHS[month]} {year}
          </div>
          <button style={{width: '200px'}} onClick={this.changeMonth(1)}>→</button>
        </div>

        <div className={s.calendarGrid}>
          {DAYS_OF_WEEK.map(day => (
            <div key={day} className={s.weekTitle}>
              {day}
            </div>
          ))}

          {calendar.map(entry => (
            <div key={`${entry.utcDate}`} className={cx(s.day, entry.within && s.dayWithin)}>
              <div className={s.dayNumber}>{entry.dayOfMonth}</div>
              <div className={s.dayContent}>{this.props.renderDay(entry)}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Calendar

const s = {
  header: css`
    display: flex;
    justify-content: center;
  `,
  calendarGrid: css`
    display: grid;
    grid-auto-rows: minmax(75px, 100px);
    grid-template-rows: auto;
    grid-template-columns: repeat(7, 1fr);
    border-bottom: 1px solid black;
    border-left: 1px solid black;
  `,
  day: css`
    display: flex;
    flex-direction: column;
    padding: 5px;
    border-top: 1px solid black;
    border-right: 1px solid black;
    overflow: hidden;
    background: gray;
  `,
  dayWithin: css`
    background: white;
  `,
  dayNumber: css`
    font-weight: bold;
  `,
  dayContent: css`
    overflow: scroll;
  `,
  weekTitle: css`
    padding: 5px;
    border-top: 1px solid black;
    border-right: 1px solid black;
    font-weight: 600;
  `,
}
