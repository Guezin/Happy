import { Router, IRouter } from 'express'

import OrphanageRoutes from './Orphanages.routes'

class Routes {
  public readonly routes: IRouter

  constructor() {
    this.routes = Router()

    this.init()
  }

  init() {
    this.routes.use('/orphanages', OrphanageRoutes)
  }
}

export default new Routes().routes
