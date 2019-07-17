import { generateCalendar, UTCDate } from './dateHelpers'

describe('date helpers', () => {
  describe('generateCalendarLayout', () => {
    it('should generate calendar layout for valid year, month', () => {
      const year = 2018
      const expected = [
        { utcDate: UTCDate(year, 1, 25), within: false, dayOfMonth: 25 },
        { utcDate: UTCDate(year, 1, 26), within: false, dayOfMonth: 26 },
        { utcDate: UTCDate(year, 1, 27), within: false, dayOfMonth: 27 },
        { utcDate: UTCDate(year, 1, 28), within: false, dayOfMonth: 28 },
        { utcDate: UTCDate(year, 2, 1), within: true, dayOfMonth: 1 },
        { utcDate: UTCDate(year, 2, 2), within: true, dayOfMonth: 2 },
        { utcDate: UTCDate(year, 2, 3), within: true, dayOfMonth: 3 },
        { utcDate: UTCDate(year, 2, 4), within: true, dayOfMonth: 4 },
        { utcDate: UTCDate(year, 2, 5), within: true, dayOfMonth: 5 },
        { utcDate: UTCDate(year, 2, 6), within: true, dayOfMonth: 6 },
        { utcDate: UTCDate(year, 2, 7), within: true, dayOfMonth: 7 },
        { utcDate: UTCDate(year, 2, 8), within: true, dayOfMonth: 8 },
        { utcDate: UTCDate(year, 2, 9), within: true, dayOfMonth: 9 },
        { utcDate: UTCDate(year, 2, 10), within: true, dayOfMonth: 10 },
        { utcDate: UTCDate(year, 2, 11), within: true, dayOfMonth: 11 },
        { utcDate: UTCDate(year, 2, 12), within: true, dayOfMonth: 12 },
        { utcDate: UTCDate(year, 2, 13), within: true, dayOfMonth: 13 },
        { utcDate: UTCDate(year, 2, 14), within: true, dayOfMonth: 14 },
        { utcDate: UTCDate(year, 2, 15), within: true, dayOfMonth: 15 },
        { utcDate: UTCDate(year, 2, 16), within: true, dayOfMonth: 16 },
        { utcDate: UTCDate(year, 2, 17), within: true, dayOfMonth: 17 },
        { utcDate: UTCDate(year, 2, 18), within: true, dayOfMonth: 18 },
        { utcDate: UTCDate(year, 2, 19), within: true, dayOfMonth: 19 },
        { utcDate: UTCDate(year, 2, 20), within: true, dayOfMonth: 20 },
        { utcDate: UTCDate(year, 2, 21), within: true, dayOfMonth: 21 },
        { utcDate: UTCDate(year, 2, 22), within: true, dayOfMonth: 22 },
        { utcDate: UTCDate(year, 2, 23), within: true, dayOfMonth: 23 },
        { utcDate: UTCDate(year, 2, 24), within: true, dayOfMonth: 24 },
        { utcDate: UTCDate(year, 2, 25), within: true, dayOfMonth: 25 },
        { utcDate: UTCDate(year, 2, 26), within: true, dayOfMonth: 26 },
        { utcDate: UTCDate(year, 2, 27), within: true, dayOfMonth: 27 },
        { utcDate: UTCDate(year, 2, 28), within: true, dayOfMonth: 28 },
        { utcDate: UTCDate(year, 2, 29), within: true, dayOfMonth: 29 },
        { utcDate: UTCDate(year, 2, 30), within: true, dayOfMonth: 30 },
        { utcDate: UTCDate(year, 2, 31), within: true, dayOfMonth: 31 },
      ]
      expect(generateCalendar(year, 2)).toEqual(expected)
    })

    it('should generate just 4 weeks for 28 days February starting Sunday', () => {
      const year = 2015
      const expected = [
        { utcDate: UTCDate(year, 1, 1), within: true, dayOfMonth: 1 },
        { utcDate: UTCDate(year, 1, 2), within: true, dayOfMonth: 2 },
        { utcDate: UTCDate(year, 1, 3), within: true, dayOfMonth: 3 },
        { utcDate: UTCDate(year, 1, 4), within: true, dayOfMonth: 4 },
        { utcDate: UTCDate(year, 1, 5), within: true, dayOfMonth: 5 },
        { utcDate: UTCDate(year, 1, 6), within: true, dayOfMonth: 6 },
        { utcDate: UTCDate(year, 1, 7), within: true, dayOfMonth: 7 },
        { utcDate: UTCDate(year, 1, 8), within: true, dayOfMonth: 8 },
        { utcDate: UTCDate(year, 1, 9), within: true, dayOfMonth: 9 },
        { utcDate: UTCDate(year, 1, 10), within: true, dayOfMonth: 10 },
        { utcDate: UTCDate(year, 1, 11), within: true, dayOfMonth: 11 },
        { utcDate: UTCDate(year, 1, 12), within: true, dayOfMonth: 12 },
        { utcDate: UTCDate(year, 1, 13), within: true, dayOfMonth: 13 },
        { utcDate: UTCDate(year, 1, 14), within: true, dayOfMonth: 14 },
        { utcDate: UTCDate(year, 1, 15), within: true, dayOfMonth: 15 },
        { utcDate: UTCDate(year, 1, 16), within: true, dayOfMonth: 16 },
        { utcDate: UTCDate(year, 1, 17), within: true, dayOfMonth: 17 },
        { utcDate: UTCDate(year, 1, 18), within: true, dayOfMonth: 18 },
        { utcDate: UTCDate(year, 1, 19), within: true, dayOfMonth: 19 },
        { utcDate: UTCDate(year, 1, 20), within: true, dayOfMonth: 20 },
        { utcDate: UTCDate(year, 1, 21), within: true, dayOfMonth: 21 },
        { utcDate: UTCDate(year, 1, 22), within: true, dayOfMonth: 22 },
        { utcDate: UTCDate(year, 1, 23), within: true, dayOfMonth: 23 },
        { utcDate: UTCDate(year, 1, 24), within: true, dayOfMonth: 24 },
        { utcDate: UTCDate(year, 1, 25), within: true, dayOfMonth: 25 },
        { utcDate: UTCDate(year, 1, 26), within: true, dayOfMonth: 26 },
        { utcDate: UTCDate(year, 1, 27), within: true, dayOfMonth: 27 },
        { utcDate: UTCDate(year, 1, 28), within: true, dayOfMonth: 28 },
      ]
      expect(generateCalendar(year, 1)).toEqual(expected)
    })

    it('should return an empty array if year or month is invalid', () => {
      expect(generateCalendar(1800, 2)).toEqual([])
      expect(generateCalendar(2020, 1.5)).toEqual([])
      expect(generateCalendar(2019, -5)).toEqual([])
    })
  })
})
