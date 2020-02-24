import { Module } from '@nestjs/common';
import { AuthenticationService } from './service/authenicationService';
import { LocalStrategy } from './strategy/localStrategy';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/userModule';
import { CryptoModule } from '../crypto/cryptoModule';
import { AuthController } from './controller/authController';
import { ConfigurationModule } from '../configuration/configurationModule';
import { SetupJwtModule } from './module/jwtModule';
import { GoogleOAuthStrategy } from './strategy/googleOAuthStrategy';
import { OAuthController } from './controller/oAuthController';
import { SecretKeyProvider } from './service/secretKeyProvider';
import { JwtStrategy } from './strategy/jwtStrategy';

@Module({
  imports: [
    PassportModule,
    UserModule,
    CryptoModule,
    SetupJwtModule.setup(),
    ConfigurationModule,
  ],
  controllers: [AuthController, OAuthController],
  providers: [
    AuthenticationService,
    SecretKeyProvider,
    LocalStrategy,
    GoogleOAuthStrategy,
    JwtStrategy,
  ],
})
export class AuthenticationModule {}
