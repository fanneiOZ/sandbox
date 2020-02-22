import { Request } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { SecretKeyProvider } from '../service/secretKeyProvider';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(readonly secretKeyProvider: SecretKeyProvider) {
    super({
      secretOrKey: secretKeyProvider.jwtModuleOptions.secret,
      jwtFromRequest: ExtractJwt.fromAuthHeader(),
    });
  }

  async validate(@Request() req): Promise<any> {
    this.authenticate(req);
  }
}
