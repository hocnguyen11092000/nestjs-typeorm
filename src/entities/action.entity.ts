import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ActionGroupEntity } from './action-group.entity';

@Entity({ name: 'action' })
export class ActionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  code: string;

  @OneToMany(() => ActionGroupEntity, (actionGroup) => actionGroup.action)
  actionGroup: ActionGroupEntity[];
}
