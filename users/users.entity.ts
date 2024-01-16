import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { UserGender } from '@/users/users.types'
import { UserRole } from '@/roles/roles.types'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar' })
  firstname: string

  @Column({ type: 'varchar' })
  lastname: string

  @Column({ type: 'varchar', unique: true })
  email: string

  @Column({ type: 'int', nullable: true })
  monthlyOffDays: number

  @Column({ type: 'int', nullable: true })
  offDays: number

  @Column({ type: 'int', nullable: true })
  monthlyWorkingTimeReduction: number

  @Column({ type: 'int', nullable: true })
  workingTimeReduction: number

  @Column({ type: 'varchar' })
  password: string

  @Column({ type: 'enum', enum: UserGender, default: [UserGender.UNSPECIFIED] })
  /**
   * m - male
   * f - female
   * u - unspecified
   */
  gender: UserGender

  @Column({ type: 'simple-array', default: [UserRole.USER] })
  /**
   * admin
   * user
   */
  roles: UserRole[]
}
