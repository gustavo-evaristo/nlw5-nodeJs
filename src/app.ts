import express from 'express'
import './database'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.database()
    this.routes()
    this.middlewares()
  }

  private middlewares () {
    this.express.use(express.json())
  }

  private database () {

  }

  private routes () {

  }
}

export default new App().express
