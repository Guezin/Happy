import { getRepository, Repository } from 'typeorm'

import Orphanage from '../entities/Orphanage'

import IOrphanageRepository from './IOrphanageRepository'
import ICreateOrphanageDTO from '../dtos/ICreateOrphanageDTO'

class OrphanageRepository implements IOrphanageRepository {
  private ormRepository: Repository<Orphanage>

  constructor() {
    this.ormRepository = getRepository(Orphanage)
  }

  public async listAll(): Promise<Orphanage[]> {
    const orphanages = await this.ormRepository.find()

    return orphanages
  }

  public async findById(orphanage_id: string): Promise<Orphanage | undefined> {
    const orphanage = await this.ormRepository.findOne({
      where: { id: orphanage_id }
    })

    return orphanage
  }

  public async create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    open_hours,
    open_on_weekends
  }: ICreateOrphanageDTO): Promise<Orphanage> {
    const orphange = this.ormRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      open_hours,
      open_on_weekends
    })

    await this.ormRepository.save(orphange)

    return orphange
  }
}

export default OrphanageRepository
