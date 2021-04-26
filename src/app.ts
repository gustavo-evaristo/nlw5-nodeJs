import express from 'express'
import './database'
import routes from './routes'
import { createServer } from 'http'
import { Server } from 'socket.io'
import path from 'path'

class App {
  public express: express.Application
  public http
  public io: Server

  public constructor () {
    this.express = express()
    this.http = createServer(this.express)
    this.middlewares()
    this.engine()
    this.socket()
    this.routes()
  }

  private middlewares () {
    this.express.use(express.json())
    this.express.use(express.static(path.join(__dirname, '..', 'public')))
  }

  private engine () {
    this.express.set('views', path.join(__dirname, '..', 'public'))
    this.express.engine('html', require('ejs').renderFile)
    this.express.set('view engine', 'ejs')
  }

  private socket () {
    this.io = new Server(this.http)
  }

  private routes () {
    this.express.use(routes)
  }
}

export default new App()
