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

export class Calendar extends React.Component<Props, State> {
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
    const t = new Date()
    const todayUtc = Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())

    return (
      <div>
        <div className={s.header}>
          <button className={s.prevButton} onClick={this.changeMonth(-1)}>
            ◀
          </button>
          <div className={s.monthNamePlaceholder}>
            {MONTHS[month]} {year}
          </div>
          <button className={s.nextButton} onClick={this.changeMonth(1)}>
            ►
          </button>
        </div>

        <div className={s.calendarGrid}>
          {DAYS_OF_WEEK.map(day => (
            <div key={day} className={s.weekTitle}>
              {day}
            </div>
          ))}

          {calendar.map(entry => {
            const isToday = +entry.utcDate === todayUtc
            const isFirstDay = entry.dayOfMonth === 1
            const dayMonth = MONTHS[entry.utcDate.getUTCMonth()]
            return (
              <div key={`${entry.utcDate}`} className={cx(s.day, entry.within && s.dayWithin)}>
                <div className={s.dayOfMonth}>
                  <span className={cx(s.dayNumber, isToday && s.dayToday)}>
                    {entry.dayOfMonth}
                    {isFirstDay && ` ${dayMonth}`}
                  </span>
                </div>
                <div className={s.dayContent}>{this.props.renderDay(entry)}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Calendar

const buttonBase = css`
    transition: 200ms linear;
    padding: 10px 20px;
    cursor: pointer;
    border: none;
    color: white;
    background: none;
    &:hover {
      transform: scale(1.5);
    }
    &:focus {
      outline: none;
    }
`
const s = {
  header: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  calendarGrid: css`
    display: grid;
    grid-auto-rows: minmax(75px, 100px);
    grid-template-rows: auto;
    grid-template-columns: repeat(7, 1fr);
    border-bottom: 1px solid white;
    border-left: 1px solid white;
  `,
  day: css`
    display: flex;
    flex-direction: column;
    padding: 5px;
    border-top: 1px solid black;
    border-right: 1px solid black;
    overflow: hidden;
    background: #e6e6e6;
  `,
  dayOfMonth: css`
    margin: 2px 0 8px;
  `,
  dayWithin: css`
    background: white;
  `,
  dayNumber: css`
    padding: 5px;
  `,
  dayContent: css`
    overflow: scroll;
  `,
  dayToday: css`
    color: white;
    background: #aa251c;
    border-radius: 25px;
  `,
  weekTitle: css`
    padding: 5px;
    color: white;
    border-top: 1px solid white;
    border-right: 1px solid white;
    font-weight: 600;
  `,
  monthNamePlaceholder: css`
    color: white;
    font-size: 1.5rem;
    text-align: center;
    min-width: 200px;
  `,
  prevButton: css`
    ${buttonBase};
    // this unicode left arrow character is a bit different from right arrow :)
    font-size: 1.8rem;
    margin-top: -3px;
  `,
  nextButton: css`
    ${buttonBase};
    font-size: 1.5rem;
  `,
}
