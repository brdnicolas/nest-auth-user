import { IsEmail, IsNotEmpty } from 'class-validator'

export class LoginDto {
  @IsNotEmpty()
  @IsEmail(undefined, { message: 'Please provide valid Email.' })
  email: string

  @IsNotEmpty()
  password: string
}
