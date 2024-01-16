import { PartialType } from '@nestjs/mapped-types'
import { CreateUserDto } from '@/users/dto/createUser.dto'

export class UpdateUserDto extends PartialType(CreateUserDto) {}
