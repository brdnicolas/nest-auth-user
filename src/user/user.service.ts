import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/createUser.dto'
import { UpdateUserDto } from './dto/updateUser.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User()
    user.firstname = createUserDto.firstname
    user.lastname = createUserDto.lastname
    user.email = createUserDto.email
    user.password = createUserDto.password
    user.gender = createUserDto.gender
    return this.userRepository.save(user)
  }

  findAllUser(): Promise<User[]> {
    return this.userRepository.find()
  }

  findUserById(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id })
  }

  findUserByEmail(email: string): Promise<User> {
    return this.userRepository.findOneBy({ email })
  }

  updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user: User = new User()
    user.firstname = updateUserDto.firstname
    user.lastname = updateUserDto.lastname
    user.email = updateUserDto.email
    user.password = updateUserDto.password
    user.id = id
    return this.userRepository.save(user)
  }

  removeUser(id: number): Promise<{ affected?: number }> {
    return this.userRepository.delete(id)
  }
}
