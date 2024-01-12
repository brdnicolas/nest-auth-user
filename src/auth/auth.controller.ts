import { Controller, Post, Body, HttpStatus, HttpCode, ConflictException } from '@nestjs/common'
import { AuthService } from './auth.service'
import { RegisterDto } from './dto/register.dto'
import { LoginDto } from './dto/login.dto'
import { UserService } from '../user/user.service'

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto)
  }

  @Post('register')
  async register(@Body() user: RegisterDto) {
    const userExists = await this.userService.findUserByEmail(user.email)

    if (userExists) {
      throw new ConflictException('This email is already used')
    }

    return await this.authService.register(user)
  }
}
