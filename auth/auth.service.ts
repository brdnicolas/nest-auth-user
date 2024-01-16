import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { compare, hash } from 'bcrypt'
import { UsersService } from '@/users/users.service'
import { User } from '@/users/users.entity'
import { RegisterDto } from '@/auth/dto/register.dto'

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {}

  private generateJwtToken(user: User): string {
    const payload = { userId: user.id, email: user.email }
    return this.jwtService.sign(payload)
  }

  private async validatePassword(plainTextPassword: string, hashedPassword: string): Promise<boolean> {
    return compare(plainTextPassword, hashedPassword)
  }

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10
    return hash(password, saltRounds)
  }

  async signIn(email: string, password: string) {
    const user = await this.userService.findByEmail(email)

    if (!user) {
      throw new UnauthorizedException('Invalid email or password')
    }

    const isPasswordValid = await this.validatePassword(password, user.password)

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password')
    }

    return { token: this.generateJwtToken(user) }
  }

  async register(user: RegisterDto): Promise<{ token: string }> {
    const userAlreadyExist = await this.userService.findByEmail(user.email)

    if (userAlreadyExist) {
      throw new UnauthorizedException('Email already exists')
    }

    const hashedPassword = await this.hashPassword(user.password)
    const createdUser = await this.userService.create({ ...user, password: hashedPassword })

    return { token: this.generateJwtToken(createdUser) }
  }
}
