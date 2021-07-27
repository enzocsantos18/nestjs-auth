import { Injectable } from '@nestjs/common';
import { Role } from 'src/auth/roles/role.enum';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'enzocsantos',
      password: '1234',
      roles: [Role.Admin],
    },
    {
      id: 2,
      username: 'nicolas',
      password: '1234',
      roles: [Role.User],
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
