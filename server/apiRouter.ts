import express from 'express'
import TitlesService from './services/titlesService'
import HttpStatus from 'http-status-codes'

const baseRouter = express.Router()
const titlesService = new TitlesService()

baseRouter.get('/titles', (req, res) => {
  titlesService
    .getTitles()
    .then(data => res.json(data))
    .catch((error: Error) => {
      res.status(HttpStatus.BAD_REQUEST).json({ message: error.message })
    })
})
export default baseRouter
