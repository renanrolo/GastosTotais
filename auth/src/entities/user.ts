import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
export default class User extends BaseEntity {
  @PrimaryColumn({ name: 'user_uuid' })
  UserUuid: string;

  @Column({ name: 'full_name' })
  FullName: string;

  @Column({ name: 'email' })
  Email: string;

  @Column({ name: 'creation_date' })
  CreationDate: Date;

  @Column({ name: 'last_update_date' })
  LastUpdateDate: Date;
}
