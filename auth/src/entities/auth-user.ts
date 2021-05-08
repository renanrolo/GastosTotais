import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('auth_users')
export default class AuthUser extends BaseEntity {
  @PrimaryColumn({ name: 'user_uuid' })
  UserUuid: string;

  @Column({ name: 'password' })
  Password: string;

  @Column({ name: 'last_update_date' })
  LastUpdateDate: Date;
}
