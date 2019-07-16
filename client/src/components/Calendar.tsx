import React from 'react'
import { css } from 'emotion'

class Calendar extends React.Component {
  render() {
    const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    const dummyDays = new Array(35).fill(true)
    return (
      <div>
        <div className={s.header}>
          <div>
            <span>←</span>
          </div>
          <div>August 2017</div>
          <div>
            <span>→</span>
          </div>
        </div>

        <div className={s.calendarGrid}>
          {daysOfWeek.map(day => (
            <div className={s.weekTitle}>{day}</div>
          ))}

          {dummyDays.map((d, idx) => (
            <div key={d + idx} className={s.day}>
              <div className={s.dayNumber}>{idx + 1}</div>
              <div className={s.dayContent}>
                <ul className={e.titlesList}>
                  <li className={e.titleItem} title="Orange is the new black">
                    Orange is the new black
                  </li>
                  <li className={e.titleItem} title="Orange is the new black">
                    Orange is the new black
                  </li>
                  <li className={e.titleItem} title="Orange is the new black">
                    Orange is the new black
                  </li>
                  <li className={e.titleItem} title="Orange is the new black">
                    Orange is the new black
                  </li>
                  <li className={e.titleItem} title="Orange is the new black">
                    Orange is the new black
                  </li>
                  <li className={e.titleItem} title="Orange is the new black">
                    Orange is the new black
                  </li>
                  <li className={e.titleItem} title="House of Cards">House of Cards</li>
                </ul>
              </div>
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
  `,
  dayNumber: css`
    font-style: italic;
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
