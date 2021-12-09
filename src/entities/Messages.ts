/* eslint-disable camelcase */
import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import Users from './Users'

import { v4 as uuid } from 'uuid'

@Entity('messages')
export default class Messages {
  @PrimaryColumn()
  id: string

  @Column()
  admin_id: string

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => Users)
  user: Users

  @Column()
  user_id: string

  @Column()
  text: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  constructor () {
    if (!this.id) this.id = uuid()
  }
}
