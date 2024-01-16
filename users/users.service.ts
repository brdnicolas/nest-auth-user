import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from '@/users/users.entity'
import { CreateUserDto } from '@/users/dto/createUser.dto'
import { UpdateUserDto } from '@/users/dto/updateUser.dto'

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User()
    user.firstname = createUserDto.firstname
    user.lastname = createUserDto.lastname
    user.email = createUserDto.email
    user.password = createUserDto.password
    user.gender = createUserDto.gender
    return this.userRepository.save(user)
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find()
  }

  findById(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id })
  }

  findByEmail(email: string): Promise<User> {
    return this.userRepository.findOneBy({ email })
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user: User = new User()
    user.firstname = updateUserDto.firstname
    user.lastname = updateUserDto.lastname
    user.email = updateUserDto.email
    user.password = updateUserDto.password
    user.id = id
    return this.userRepository.save(user)
  }

  remove(id: number): Promise<{ affected?: number }> {
    return this.userRepository.delete(id)
  }
}
