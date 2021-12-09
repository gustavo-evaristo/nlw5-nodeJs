import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

import { v4 as uuid } from 'uuid'

@Entity('settings')
export default class Settings {
  @PrimaryColumn()
  id: string

  @Column()
  username: string

  @Column()
  chat: boolean

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  constructor () {
    if (!this.id) this.id = uuid()
  }
}
