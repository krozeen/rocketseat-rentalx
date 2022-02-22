import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../User';

interface IUserRepository {
  [x: string]: any;
  create(data: ICreateUserDTO): Promise<void>;
  // list(): Promise<User[]>;
  findByEmail(name: string): Promise<User>;
}

export { IUserRepository };
