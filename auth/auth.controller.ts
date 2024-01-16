import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  UseGuards,
  Get,
  Request,
  ConflictException
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginDto } from '@/auth/dto/login.dto'
import { ApiTags } from '@nestjs/swagger'
import { Public } from '@/auth/auth.decorator'
import { RegisterDto } from '@/auth/dto/register.dto'

@ApiTags('authentification')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() loginDto: LoginDto) {
    return this.authService.signIn(loginDto.email, loginDto.password)
  }

  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user
  }

  @Post('register')
  @Public()
  async register(@Body() user: RegisterDto) {
    return await this.authService.register(user)
  }
}
