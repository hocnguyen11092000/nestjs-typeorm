import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActionEntity } from 'src/entities/action.entity';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,

    @InjectRepository(ActionEntity)
    private readonly actionRepository: Repository<ActionEntity>,
  ) {}

  async getPermission(id: string) {
    const result = await this.userRepository
      .createQueryBuilder('user')
      .where('user.id = :id', { id })
      .leftJoinAndSelect('user.groups', 'groups')
      .leftJoinAndSelect('groups.actionGroup', 'actionGroup')
      .leftJoinAndSelect('actionGroup.action', 'action')
      .getMany();
    console.log(JSON.stringify(result));

    // const actionIds = result.reduce((acc, curr) => {
    //   const actions = [];

    //   for (const group of curr.groups) {
    //     for (const action of group.actionGroup) {
    //       actions.push(action.action_id);
    //     }
    //   }

    //   return [...acc, ...actions];
    // }, []);

    // if (actionIds.length) {
    //   const values = await this.actionRepository
    //     .createQueryBuilder('action')
    //     .where('id IN(:...ids)', { ids: actionIds })
    //     .getMany();

    //   console.log(values);
    // }
  }
}
