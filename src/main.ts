import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import { ValidationPipe } from '@nestjs/common'
import * as passport from 'passport'
import { config } from 'dotenv'

async function bootstrap() {
  config()
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe({ stopAtFirstError: true, whitelist: true }))
  app.use(passport.initialize())
  await app.listen(3000)
}
bootstrap()
