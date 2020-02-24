import { Request, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { SecretKeyProvider } from '../service/secretKeyProvider';
import { AuthenticationService } from '../service/authenicationService';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly moduleRef: ModuleRef,
    readonly secretKeyProvider: SecretKeyProvider,
  ) {
    super({
      secretOrKey: secretKeyProvider.jwtModuleOptions.secret,
      ignoreExpiration: true,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      passReqToCallback: true,
    });
  }

  public async validate(@Request() req): Promise<any> {
    const contextId = ContextIdFactory.getByRequest(req);
    const authService = await this.moduleRef.resolve(AuthenticationService, contextId);
    const jwt = req.headers.authorization.match(/Bearer\s(\S*)/)[1];
    const user = await authService.validateByJwt(jwt);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
