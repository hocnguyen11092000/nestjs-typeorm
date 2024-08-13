import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { ActionEntity } from './action.entity';
import { GroupEntity } from './group.entity';

@Entity({ name: 'action_group' })
export class ActionGroupEntity {
  @PrimaryColumn('uuid')
  action_id: string;

  @ManyToOne(() => ActionEntity, (action) => action.actionGroup)
  @JoinColumn({ name: 'action_id' })
  action: ActionEntity;

  @PrimaryColumn('uuid')
  group_id: string;

  @ManyToOne(() => GroupEntity, (group) => group.actionGroup)
  @JoinColumn({ name: 'group_id' })
  group: GroupEntity;

  @Column()
  checked: boolean;
}
