import { Injectable } from "@nestjs/common";

export type User =any;
@Injectable()
export class UserService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {id: 1, username: 'john', password: 'doe'},
      {id: 2, username: 'ren', password: 'amamiya'},
      {id: 3, username: 'ann', password: 'takamaki'}
    ]; 
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}