import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator'

export class RegisterDto {
  @IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  firstname: string

  @IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  lastname: string

  @IsNotEmpty()
  @IsEmail(undefined, { message: 'Please provide valid Email.' })
  email: string

  @IsString()
  @IsEnum(['f', 'm', 'u'], { message: "Gender must be 'f', 'm' or 'u'" })
  @IsNotEmpty()
  gender: string

  @IsNotEmpty()
  password: string
}
