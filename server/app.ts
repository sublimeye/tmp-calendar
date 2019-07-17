import express from 'express'
import path from 'path'
import cors from 'cors'
import apiRouter from './apiRouter'

const app = express()
// we don't need it on localhost though
app.use(cors())

app.use('/api', apiRouter)

/**
 * These endpoints are used for deploying the Heroku app, which serves
 * both the server and client. Testing the client locally should be done
 * with the CRA server, which proxies requests to this server for /api, but serves
 * the content separately for HMR.
 */
app.use('/static', express.static(path.join(`${__dirname}/build/static`)))
app.get('/*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/build/index.html`))
})

export default app
