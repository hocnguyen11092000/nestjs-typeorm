import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { GroupEntity } from './entities/group.entity';
import { ActionEntity } from './entities/action.entity';
import { ActionGroupEntity } from './entities/action-group.entity';
import { UserController } from './controllers/user.controler';
import { UserService } from './services/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '111111',
      database: 'permission',
      entities: [UserEntity, GroupEntity, ActionEntity, ActionGroupEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      UserEntity,
      GroupEntity,
      ActionEntity,
      ActionGroupEntity,
    ]),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
