import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator'
import { UserGender } from '@/users/users.types'
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  firstname: string

  @ApiProperty()
  @IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  lastname: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail(undefined, { message: 'Please provide valid Email.' })
  email: string

  @ApiProperty({ enum: UserGender })
  @IsString()
  @IsEnum(UserGender, { message: "Gender must be 'f', 'm' or 'u'" })
  gender: UserGender

  @ApiProperty()
  @IsNotEmpty()
  password: string
}
