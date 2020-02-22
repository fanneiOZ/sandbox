import { User } from '../model/user';
import { UserInterface } from '../interface/userInterface';
import { Injectable } from '@nestjs/common';
import { Op, WhereOptions } from 'sequelize';

export type ValidationStrategy = 'password' | 'jwt' | 'oauth';

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

  public findByEmail(email: string): Promise<User> {
    return User.findOne({
      where: { email: { [Op.eq]: email } },
    });
  }

  public validate(
    validationType: ValidationStrategy,
    user: UserInterface,
  ): Promise<User> {
    let whereCondition: WhereOptions;

    switch (validationType) {
      case 'password':
        whereCondition = {
          [Op.and]: {
            email: { [Op.eq]: user.email },
          },
        };
        break;
      case 'jwt':
        whereCondition = {
          [Op.and]: {
            id: { [Op.eq]: user.id },
            email: { [Op.eq]: user.email },
            password: { [Op.eq]: user.password },
          },
        };
        break;
    }
    return User.findOne({ where: whereCondition });
  }

  public buildUser(userOptions: UserInterface): User {
    return User.build(userOptions);
  }

  public saveUser(userInstance: User): Promise<User> {
    return userInstance.save();
  }
}
