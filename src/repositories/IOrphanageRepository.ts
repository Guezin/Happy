import Orphanage from '../entities/Orphanage'

import ICreateOrphanageDTO from '../dtos/ICreateOrphanageDTO'

export default interface IOrphanageRepository {
  create(orphanageData: ICreateOrphanageDTO): Promise<Orphanage>
}
