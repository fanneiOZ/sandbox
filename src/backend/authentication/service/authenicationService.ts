import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../user/service/userService';
import { CryptoService } from '../../crypto/service/cryptoService';
import { User } from '../../user/model/user';
import { JwtPayloadInterface } from '../interface/jwtPayloadInterface';
import { Op } from 'sequelize';
import { UserInterface } from 'src/backend/user/interface/userInterface';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userService: UserService,
    private readonly crytoService: CryptoService,
    private readonly jwtService: JwtService,
  ) {}

  public validateByPassword(
    email: string,
    password: string,
  ): Promise<User | null> {
    return this.userService.findByEmail(email).then(data => {
      const verifiedPassword = this.crytoService.decrypt(data.get('password'));
      if (!data || verifiedPassword !== password) {
        return null;
      }
      return data;
    });
  }

  public validateByJwt(token: string) {
    const payload = this.jwtService.decode(token) as UserInterface;
    return User.count({
      where: {
        id: { [Op.eq]: payload.id },
        email: { [Op.eq]: payload.email },
      },
    }).then(data => {
      if (!data) {
        return payload;
      } else {
        return null;
      }
    });
  }

  public assignJwtToken(user: UserInterface) {
    const payload: JwtPayloadInterface = {
      user: {
        id: user.id,
        username: user.email,
      },
    };
    return this.jwtService.sign(payload);
  }
}
