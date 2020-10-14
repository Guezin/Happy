import Orphanage from '../entities/Orphanage'

import ICreateOrphanageDTO from '../dtos/ICreateOrphanageDTO'

export default interface IOrphanageRepository {
  listAll: () => Promise<Orphanage[]>
  create: (orphanageData: ICreateOrphanageDTO) => Promise<Orphanage>
  findById: (orphanage_id: string) => Promise<Orphanage | undefined>
}
