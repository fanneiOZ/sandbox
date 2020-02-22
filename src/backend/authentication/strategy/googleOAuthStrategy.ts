import { Injectable, Request } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { SecretKeyProvider } from '../service/secretKeyProvider';

@Injectable()
export class GoogleOAuthStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(readonly keyProvider: SecretKeyProvider) {
    super({
      clientID: keyProvider.googleOptions.clientID,
      clientSecret: keyProvider.googleOptions.clientSecret,
      callbackURL: 'http://localhost:3000/oauth/google/verify',
      scope: ['profile'],
      passReqToCallback: true,
    });
  }

  public async validate(@Request() req): Promise<any> {
    this.authenticate(req);
  }
}
