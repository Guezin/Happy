import { Router, IRouter } from 'express'

import OrphanageController from '../controller/OrphanageController'

class OrphanageRoutes {
  public readonly routes: IRouter

  constructor() {
    this.routes = Router()

    this.init()
  }

  init() {
    this.routes.get('/', new OrphanageController().index)
    this.routes.post('/', new OrphanageController().store)
  }
}

export default new OrphanageRoutes().routes
