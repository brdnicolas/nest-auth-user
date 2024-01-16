import { Controller, Get, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common'
import { UsersService } from '@/users/users.service'
import { UpdateUserDto } from '@/users/dto/updateUser.dto'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'

@ApiTags('user')
@ApiBearerAuth()
@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  findAll() {
    return this.userService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findById(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id)
  }
}
