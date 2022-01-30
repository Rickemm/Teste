import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

import { AdressEntity } from './adress.entity';
import { ContactEntity } from './contact.entity';
import { SkillEntity } from './skill.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  age: number;

  @Column()
  weight: number;

  @Column()
  height: number;

  @OneToMany(() => AdressEntity, (adress) => adress.userId, {
    cascade: ['insert', 'update'],
  })
  adresses: AdressEntity[];

  @OneToMany(() => ContactEntity, (contact) => contact.userId, {
    cascade: ['insert', 'update'],
  })
  contacts: ContactEntity[];

  @OneToMany(() => SkillEntity, (skill) => skill.userId, {
    cascade: ['insert', 'update'],
  })
  skills: SkillEntity[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
