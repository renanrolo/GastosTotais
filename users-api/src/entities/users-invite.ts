import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users_invite')
export default class UsersInvite extends BaseEntity {
  constructor(uuid: string, email: string, inviteDate: Date, accepted: boolean) {
    super();

    this.UserInviteUuid = uuid;
    this.Email = email;
    this.InviteDate = inviteDate;
    this.Accepted = accepted;
  }

  @PrimaryColumn({ name: 'user_invite_uuid' })
  UserInviteUuid: string;

  @Column({ name: 'email' })
  Email: string;

  @Column({ name: 'invite_date' })
  InviteDate: Date;

  @Column({ name: 'accepted' })
  Accepted: boolean;
}
