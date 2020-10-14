import { Request, Response } from 'express'

import orphanageView from '../views/orphanges_view'

import ListOrphanageUseCase from '../useCases/Orphanage/ListOrphanageUseCase'
import ListAllOrphanagesUseCase from '../useCases/Orphanage/ListAllOrphanagesUseCase'
import CreateOrphanageUseCase from '../useCases/Orphanage/CreateOrphanageUseCase'

class OrphanageController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listAllOrphanagesUseCase = new ListAllOrphanagesUseCase()

    const orphanages = await listAllOrphanagesUseCase.execute()

    return response.status(200).json(orphanageView.renderMany(orphanages))
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const listOrphanageUseCase = new ListOrphanageUseCase()

    const orphanage = await listOrphanageUseCase.execute(id)

    return response.status(200).json(orphanageView.render(orphanage))
  }

  public async store(request: Request, response: Response): Promise<Response> {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      open_hours,
      open_on_weekends
    } = request.body

    const requestImages = request.files as Express.Multer.File[]
    const images = requestImages.map(image => {
      return { path: image.filename }
    })

    const createOrphanageUseCase = new CreateOrphanageUseCase()

    const orphanage = await createOrphanageUseCase.execute({
      name,
      latitude,
      longitude,
      about,
      instructions,
      open_hours,
      open_on_weekends,
      images
    })

    return response.status(201).json(orphanage)
  }
}

export default OrphanageController
