import { Role } from 'src/auth/roles/role.enum';

export class User {
  id?: number;
  username: string;
  password: string;
  roles: Role[];
}
