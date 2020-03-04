import { Injectable, Request } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import {
  Strategy,
  Profile,
  VerifyCallback,
  AuthenticateOptionsGoogle,
} from 'passport-google-oauth20';
import { SecretKeyProvider } from '../service/secretKeyProvider';

@Injectable()
export class GoogleOAuthStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(readonly keyProvider: SecretKeyProvider) {
    super(
      {
        clientID: keyProvider.googleOptions.clientID,
        clientSecret: keyProvider.googleOptions.clientSecret,
        callbackURL: 'http://localhost:3000/oauth/google/verify',
        scope: ['profile'],
        accessType: 'online',
      },
      function(
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done: VerifyCallback,
      ) {
        console.log({ accessToken, refreshToken, profile, done });
      },
    );
  }

  public async validate(@Request() req): Promise<any> {
    // const options: AuthenticateOptionsGoogle = {
    //   accessType: 'online'
    // };
    // this.authenticate(req, options);
    // const getProfile = this.userProfile(req.query.code, (err, profile) => {
    //   return profile;
    // });
    // console.log('authenticated');
    // console.log(getProfile);
    // return getProfile;
  }
}
