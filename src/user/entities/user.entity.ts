import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  /**
   * this decorator will help to auto generate id for the table.
   */
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

  @Column({ type: 'enum', enum: ['m', 'f', 'u'] })
  /**
   * m - male
   * f - female
   * u - unspecified
   */
  gender: string
}
