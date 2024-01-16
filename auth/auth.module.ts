import { Module } from '@nestjs/common'
import { UsersModule } from '@/users/users.module'
import { AuthController } from '@/auth/auth.controller'
import { AuthService } from '@/auth/auth.service'
import { JwtModule } from '@nestjs/jwt'
import { APP_GUARD } from '@nestjs/core'
import { AuthGuard } from '@/auth/auth.guard'
import { ConfigModule, ConfigService } from '@nestjs/config'

@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        global: true,
        secret: config.get('JWT_SECRET'),
        signOptions: { expiresIn: config.get('JWT_EXPIRATION_TIME') }
      })
    })
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ],
  exports: [AuthService]
})
export class AuthModule {}
