import 'reflect-metadata'
import express, { Express, json } from 'express'

import './database/connection'

import Routes from './routes'

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
  }

  init() {
    this.server.listen(this.PORT, () =>
      console.log(`Server is running http://localhost:${this.PORT}`)
    )
  }
}

export default new Server().server
