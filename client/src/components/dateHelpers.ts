// Usually I don't annotate / comment in types/interfaces, here just showing my thoughts and intentions
// to help reviewer to "parse" it faster :)
export type CalendarDay = {
  // Initially it was just "date" but just to make things more clear I specifically identified it as utcDate
  utcDate: Date
  // Indicates if a day is within provided month; Calendar can render "out of bounds" dates
  within: boolean
  // A precomputed day of the month for convenience
  dayOfMonth: number
}

export type CalendarGrid = CalendarDay[]

/**
 * Same as Date.UTC but returns a date object instead of a number in milliseconds
 * @param year
 * @param month
 * @param day
 * @constructor
 */
export function UTCDate(year: number, month: number, day: number = 1): Date {
  return new Date(Date.UTC(year, month, day))
}

/**
 * Generates array of weeks with days and extra info to build calendar
 *
 * I hate Date API in Javascript; Why constructor returns local or UTC
 * time depending on type of parameters. I don't get it :(
 *
 * @param year
 * @param month
 */
export function generateCalendar(year: number, month: number): CalendarGrid {
  // Basic year/month validation
  const minYear = +new Date().getFullYear() - 100
  const maxYear = +new Date().getFullYear() + 100
  if (
    year < minYear ||
    year > maxYear ||
    month < 0 ||
    month > 11 ||
    !Number.isInteger(year) ||
    !Number.isInteger(month)
  ) {
    return []
  }

  const calendar = []
  const firstDateOfMonth = new Date(year, month, 1)
  const lastDateOfMonth = new Date(year, month + 1, 0)
  const firstSundayInGrid = getSundayOfTheWeek(firstDateOfMonth)
  const lastSaturdayInGrid = getSaturdayOfTheWeek(lastDateOfMonth)

  const iterDate = new Date(firstSundayInGrid)
  while (iterDate <= lastSaturdayInGrid) {
    const utcDate = new Date(Date.UTC(iterDate.getFullYear(), iterDate.getMonth(), iterDate.getDate()))
    calendar.push({
      utcDate,
      within: iterDate >= firstDateOfMonth && iterDate <= lastDateOfMonth,
      dayOfMonth: iterDate.getDate(),
    })
    iterDate.setDate(iterDate.getDate() + 1)
  }

  return calendar
}

/**
 * Takes day of the week from "date" argument and returns a date corresponding to Sunday of this week
 * Returns Sunday Date of the current week represented by passed date argument
 * E.g. if day of the week in date is Tuesday, it will return Sunday that goes before it
 * @param date
 */
function getSundayOfTheWeek(date: Date): Date {
  const offsetFromSunday = date.getDay()
  const result = new Date(date)
  result.setDate(date.getDate() - offsetFromSunday)
  return result
}

/**
 * Takes day of the week from "date" argument and returns a date corresponding to Saturday of this week
 * Returns Saturday Date of the current week represented by passed date argument
 * E.g. if day of the week in date is Tuesday, it will return Saturday that goes after it
 * @param date
 */
function getSaturdayOfTheWeek(date: Date): Date {
  const offsetFromNextSaturday = 6 - date.getDay()
  const result = new Date(date)
  result.setDate(date.getDate() + offsetFromNextSaturday)
  return result
}
