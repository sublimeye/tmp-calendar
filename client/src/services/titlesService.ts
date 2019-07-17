import groupBy from 'lodash/groupBy'
import map from 'lodash/map'
import * as yup from 'yup'

type Title = {
  id: string
  launch_date: string
  title: string
}
export type TitlesData = Title[]

const titlesSchema = yup
  .object()
  .shape({
    data: yup
      .array()
      .of(
        yup.object().shape({
          id: yup.string().required(),
          launch_date: yup.string().required(),
          title: yup.string().required(),
        }),
      )
      .required(),
  })
  .required()

class TitlesService {
  private groupByTransformation(data: TitlesData) {
    return groupBy(
      map(data, ({ id, launch_date, title }) => {
        return {
          id,
          title,
          launchDate: launch_date,
          // a hacky workaround to treat the date as GMT
          // alternative would be to create new Date object and mess around with UTC methods >_<
          dateUtc: +new Date(launch_date + 'Z'),
        }
      }),
      'dateUtc',
    )
  }

  getTitles() {
    return fetch('//localhost:4000/api/titles')
      .then(response => response.json())
      .then(response => {
        return titlesSchema.validate(response)
      })
      .then(({ data }) => data)
      .then(this.groupByTransformation)
  }
}

// kinda singleton :)
export default new TitlesService()
