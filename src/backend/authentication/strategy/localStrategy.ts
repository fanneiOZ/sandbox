import { Strategy } from 'passport-local';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthenticationService } from '../service/authenicationService';
import { ModuleRef, ContextIdFactory } from '@nestjs/core';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly moduleRef: ModuleRef) {
    super({ passReqToCallback: true });
  }

  public async validate(
    request: Request,
    username: string,
    password: string,
  ): Promise<any> {
    const contextId = ContextIdFactory.getByRequest(request);
    const authService = await this.moduleRef.resolve(
      AuthenticationService,
      contextId,
    );
    const user = await authService.validateByPassword(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
