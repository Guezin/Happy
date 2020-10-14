import { Request, Response } from 'express'

import CreateOrphanageUseCase from '../useCases/Orphanage/CreateOrphanageUseCase'

class OrphanageController {
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

    const createOrphanageUseCase = new CreateOrphanageUseCase()

    const orphanage = await createOrphanageUseCase.execute({
      name,
      latitude,
      longitude,
      about,
      instructions,
      open_hours,
      open_on_weekends
    })

    return response.json(orphanage)
  }
}

export default OrphanageController
