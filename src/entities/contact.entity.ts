import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { UserEntity } from './user.entity';

export type contactType = 'telephone' | 'cellphone';

@Entity()
export class ContactEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: ['telephone', 'cellphone'],
    default: 'cellphone',
  })
  type: contactType;

  @Column()
  contact: string;

  @ManyToOne(() => UserEntity, (user) => user.contacts, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  userId: UserEntity;
}
