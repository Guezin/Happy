import Orphanage from '../../entities/Orphanage'

import OrphanageRepository from '../../repositories/OrphanageRepository'

interface IRequest {
  name: string
  latitude: number
  longitude: number
  about: string
  instructions: string
  open_hours: string
  open_on_weekends: boolean
}

class CreateOrphanageUseCase {
  public async execute({
    name,
    latitude,
    longitude,
    about,
    instructions,
    open_hours,
    open_on_weekends
  }: IRequest): Promise<Orphanage> {
    const orphanageRepository = new OrphanageRepository()

    const orphanage = await orphanageRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      open_hours,
      open_on_weekends
    })

    return orphanage
  }
}

export default CreateOrphanageUseCase
