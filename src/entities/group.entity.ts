import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { ActionGroupEntity } from './action-group.entity';

@Entity({ name: 'group' })
export class GroupEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  code: string;

  @ManyToMany(() => UserEntity, (user) => user.groups)
  users: UserEntity[];

  @OneToMany(() => ActionGroupEntity, (actionGroup) => actionGroup.group)
  actionGroup: ActionGroupEntity[];
}
