import { Module } from '@nestjs/common';
import { AuthenticationService } from './service/authenicationService';
import { LocalStrategy } from './strategy/localStrategy';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/userModule';
import { CryptoModule } from '../crypto/cryptoModule';
import { AuthController } from './controller/authController';
import { JwtModule } from '@nestjs/jwt';
import { ConfigurationModule } from '../configuration/configurationModule';
import { ConfigurationService } from '../configuration/service/configurationService';
import { SecurityConfig } from '../configuration/interface/securityConfig';

@Module({
  imports: [
    PassportModule,
    UserModule,
    CryptoModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '60s' },
    }),
    ConfigurationModule,
  ],
  controllers: [AuthController],
  providers: [AuthenticationService, LocalStrategy],
})
export class AuthenticationModule {}
