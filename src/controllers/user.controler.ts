import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from 'src/services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  userPermissions(@Param('id') id: string) {
    this.userService.getPermission(id);
  }
}
