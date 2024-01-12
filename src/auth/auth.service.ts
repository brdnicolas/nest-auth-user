import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { JwtService } from '@nestjs/jwt'
import { compare, hash } from 'bcrypt'
import { RegisterDto } from './dto/register.dto'
import { User } from '../user/entities/user.entity'
import { LoginDto } from './dto/login.dto'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  private async validatePassword(plainTextPassword: string, hashedPassword: string): Promise<boolean> {
    return compare(plainTextPassword, hashedPassword)
  }

  private async generateJwtToken(user: User): Promise<string> {
    const payload = { userId: user.id, email: user.email }
    return this.jwtService.sign(payload)
  }

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10
    return hash(password, saltRounds)
  }

  async register(user: RegisterDto): Promise<{ token: string }> {
    const hashedPassword = await this.hashPassword(user.password)
    const newUser = await this.userService.createUser({ ...user, password: hashedPassword })

    return { token: await this.generateJwtToken(newUser) }
  }

  async login(credentials: LoginDto): Promise<{ token: string }> {
    const { email, password } = credentials

    const user = await this.userService.findUserByEmail(email)

    if (!user) {
      throw new UnauthorizedException('Invalid email or password')
    }

    const isPasswordValid = await this.validatePassword(password, user.password)

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password')
    }

    return { token: await this.generateJwtToken(user) }
  }
}
