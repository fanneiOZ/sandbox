import { Injectable, Request } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, StrategyOptionsWithRequest } from 'passport-google-oauth20';

@Injectable()
export class GoogleOAuthStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    const options: StrategyOptionsWithRequest = {
      clientID: '188950798355-v0r6gcuo6nitbi2c46aouh7n42kj4ls9.apps.googleusercontent.com',
      clientSecret: 'X4fLlkD2pN3_MyInDuKdM4Cl',
      callbackURL: 'http://localhost:3000/oauth/google/verify',
      scope: ['profile'],
      passReqToCallback: true
    }
    super(options);
  }

  public async validate(@Request() req): Promise<any> {
    this.authenticate(req);    
  }
}
