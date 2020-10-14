import Orphanage from '../../entities/Orphanage'

import OrphanageRepository from '../../repositories/OrphanageRepository'

class ListAllOrphanagesUseCase {
  public async execute(): Promise<Orphanage[]> {
    const orphanageRepository = new OrphanageRepository()

    const orphanages = await orphanageRepository.listAll()

    return orphanages
  }
}

export default ListAllOrphanagesUseCase
