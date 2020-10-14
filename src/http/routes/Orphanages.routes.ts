import { Router, IRouter } from 'express'
import multer, { Multer } from 'multer'

import multerConfig from '../../config/multer'
import OrphanageController from '../../controller/OrphanageController'

class OrphanageRoutes {
  public readonly routes: IRouter
  private upload: Multer

  constructor() {
    this.routes = Router()
    this.upload = multer(multerConfig)

    this.init()
  }

  init() {
    this.routes.get('/', new OrphanageController().index)
    this.routes.get('/:id', new OrphanageController().show)
    this.routes.post(
      '/',
      this.upload.array('images'),
      new OrphanageController().store
    )
  }
}

export default new OrphanageRoutes().routes
