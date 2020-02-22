import { Injectable, Scope } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../user/service/userService';
import { CryptoService } from '../../crypto/service/cryptoService';
import { User } from '../../user/model/user';
import { JwtPayloadInterface } from '../interface/jwtPayloadInterface';
import { UserInterface } from 'src/backend/user/interface/userInterface';

@Injectable({ scope: Scope.REQUEST })
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
    return this.userService
      .validate('password', { email: email })
      .then(data => {
        const verifiedPassword = this.crytoService.decrypt(
          data.get('password'),
        );
        if (!data || verifiedPassword !== password) {
          return null;
        }
        return data;
      });
  }

  public validateByJwt(token: string) {
    const user = this.jwtService.decode(token)['user'] as UserInterface;
    user.password = this.crytoService.decrypt(user.password);
    return this.userService.validate('jwt', user).then(data => {
      return data ? user : null;
    });
  }

  public assignJwtToken(user: UserInterface) {
    const payload: JwtPayloadInterface = {
      user: {
        id: user.id,
        email: user.email,
        password: this.crytoService.encrypt(user.password),
      },
    };
    return this.jwtService.sign(payload);
  }
}
