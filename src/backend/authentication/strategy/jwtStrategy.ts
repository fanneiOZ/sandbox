import { Request, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { SecretKeyProvider } from '../service/secretKeyProvider';
import { AuthenticationService } from '../service/authenicationService';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(readonly secretKeyProvider: SecretKeyProvider,
    private authService: AuthenticationService
    ) {
    super({
      secretOrKey: secretKeyProvider.jwtModuleOptions.secret,
      ignoreExpiration: true,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      passReqToCallback: true
    });
  }

  public async validate(@Request() req): Promise<any> {
    const jwt = req.headers.authorization.match(/Bearer\s(\S*)/)[1];
    const user = await this.authService.validateByJwt(jwt);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user
  }
}
