import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
export default class Users extends BaseEntity {
  constructor(uuid: string, 
              fullName: string, 
              email: string, 
              creationDate: Date,
              lastUpdateDate: Date,
              userTypeId: number) {
    super();

    this.UserUuid = uuid;
    this.FullName = fullName;
    this.Email = email;
    this.CreationDate = creationDate;
    this.LastUpdateDate = lastUpdateDate;
    this.UserTypeId = userTypeId;
  }

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

  @Column({ name: 'user_type_id' })
  UserTypeId: number;
}
