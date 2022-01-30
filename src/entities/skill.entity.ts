import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { UserEntity } from './user.entity';

export type levelTypes = 'beginner' | 'intermediary' | 'advanced';

@Entity()
export class SkillEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: ['beginner', 'intermediary', 'advanced'],
  })
  level: levelTypes;

  @Column()
  skill: string;

  @Column()
  expirience: number;

  @ManyToOne(() => UserEntity, (user) => user.skills, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  userId: UserEntity;
}
