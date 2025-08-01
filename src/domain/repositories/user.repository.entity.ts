import { UserEntity } from "@entities";

export interface UserRepository {
  findById(user_id: number): Promise<UserEntity | null>;
  create(user: UserEntity): Promise<UserEntity>;
  findByName(name: string): Promise<UserEntity[]>;
  findByUserId(user_id: number, name?: string): Promise<UserEntity | null>;
}
