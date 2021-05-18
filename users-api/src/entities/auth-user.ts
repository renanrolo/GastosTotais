import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('auth_users')
export default class AuthUser extends BaseEntity {
  constructor(uuid: string, password: string, lastUpdateDate: Date) {
    super();

    this.UserUuid = uuid;
    this.Password = password;
    this.LastUpdateDate = lastUpdateDate;
  }

  @PrimaryColumn({ name: 'user_uuid' })
  UserUuid: string;

  @Column({ name: 'password' })
  Password: string;

  @Column({ name: 'last_update_date' })
  LastUpdateDate: Date;
}
