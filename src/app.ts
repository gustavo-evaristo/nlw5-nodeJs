import express from 'express'
import './database'
import routes from './routes'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.database()
    this.middlewares()
    this.routes()
  }

  private database () {

  }

  private middlewares () {
    this.express.use(express.json())
  }

  private routes () {
    this.express.use(routes)
  }
}

export default new App().express
