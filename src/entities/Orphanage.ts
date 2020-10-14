import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity('orphanages')
class Orphanage {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column('decimal')
  latitude: number

  @Column('decimal')
  longitude: number

  @Column()
  about: string

  @Column()
  instructions: string

  @Column()
  open_hours: string

  @Column()
  open_on_weekends: boolean

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Orphanage
