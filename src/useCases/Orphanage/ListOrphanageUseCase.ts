import AppError from '../../errors/AppError'

import Orphanage from '../../entities/Orphanage'
import OrphanageRepository from '../../repositories/OrphanageRepository'

class ListOrphanageUseCase {
  public async execute(orphanage_id: string): Promise<Orphanage> {
    const orphanageRepository = new OrphanageRepository()

    const orphanage = await orphanageRepository.findById(orphanage_id)

    if (!orphanage) {
      throw new AppError('Sorry, orphanage not found!')
    }

    return orphanage
  }
}

export default ListOrphanageUseCase
