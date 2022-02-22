import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../User';

interface IUserRepository {
  create(data: ICreateUserDTO): Promise<void>;
  // list(): Promise<User[]>;
  findByEmail(name: string): Promise<User>;
  findById(id: string): Promise<User>;
}

export { IUserRepository };
