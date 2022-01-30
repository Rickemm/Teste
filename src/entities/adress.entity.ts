import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { UserEntity } from './user.entity';

@Entity()
export class AdressEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  adress: string;

  @Column()
  district: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @ManyToOne(() => UserEntity, (user) => user.adresses, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  userId: UserEntity;
}
