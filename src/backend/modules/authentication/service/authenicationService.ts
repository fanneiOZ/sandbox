import { Injectable } from '@nestjs/common';
import { UserService } from '../../user/service/userService';
import { CryptoService } from '../../crypto/service/cryptoService';
import { User } from '../../user/model/user';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userService: UserService,
    private readonly crytoService: CryptoService,
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
}
