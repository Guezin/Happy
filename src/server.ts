import 'reflect-metadata'
import express, { Express, json } from 'express'
import 'express-async-errors'

import './database/connection'

import Routes from './http/routes'
import middlewareError from './http/middlewares/error'

class Server {
  public readonly server: Express
  private PORT: number

  constructor() {
    this.server = express()
    this.PORT = 3333

    this.middlewares()
    this.init()
  }

  middlewares() {
    this.server.use(json())
    this.server.use(Routes)
    this.server.use(middlewareError)
  }

  init() {
    this.server.listen(this.PORT, () =>
      console.log(`Server is running http://localhost:${this.PORT}`)
    )
  }
}

export default new Server().server
