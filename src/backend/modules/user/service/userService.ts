import { User } from '../model/user';
import { UserInterface } from '../interface/userInterface';
import { Injectable } from '@nestjs/common';
import { Op } from 'sequelize';

@Injectable()
export class UserService {
  public findById(id: number): Promise<User> {
    return User.findByPk(id)
      .then(user => {
        if (user) {
          return user;
        } else {
          throw Error('User Not Found');
        }
      })
      .catch(error => {
        throw error;
      });
  }

  public validate(user: UserInterface): Promise<User> {
    return User.findOne({
      where: {
        email: { [Op.eq]: user.email },
        password: { [Op.eq]: user.password }
      },
    });
  }

  public buildUser(userOptions: UserInterface): User {
    return User.build(userOptions);
  }

  public saveUser(userInstance: User): Promise<User> {
    return userInstance.save();
  }
}
