import express from 'express'
import TitlesService from './services/titlesService'
import HttpStatus from 'http-status-codes'
import * as yup from 'yup'

const titlesRouter = express.Router()
const titlesService = new TitlesService()

const titlesQuerySchema = yup.object().shape({
  year: yup
    .number()
    .min(1900)
    .max(2200)
    .integer()
    .required(),
  month: yup
    .number()
    .min(1)
    .max(12)
    .integer()
    .required(),
})

titlesRouter.get('/titles', (req, res) => {
  const query = {
    year: parseInt(req.query.year, 10),
    month: parseInt(req.query.month, 10),
  }

  titlesQuerySchema
    .validate(query)
    .then(q => titlesService.getTitles(q.year, q.month))
    .then(data => res.json(data))
    .catch((error: Error) => {
      res.status(HttpStatus.BAD_REQUEST).json({ message: error.message })
    })
})
export default titlesRouter
