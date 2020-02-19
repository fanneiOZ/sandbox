import { JwtModule } from '@nestjs/jwt';
import { Module, forwardRef, DynamicModule } from '@nestjs/common';
import { ConfigurationModule } from '../../configuration/configurationModule';
import { ConfigurationService } from '../../configuration/service/configurationService';
import { SecurityConfig } from '../../configuration/interface/securityConfig';
@Module({
  imports: [
    forwardRef(() => {
      ConfigurationModule;
    }),
  ],
})
export class SetupJwtModule extends JwtModule {
  private static readonly jwtConfig = new ConfigurationService().resolve(
    'security',
  ) as SecurityConfig;
  public static setup(): DynamicModule {
    return this.register({
      secret: this.jwtConfig.jwt.secret,
      signOptions: this.jwtConfig.jwt.signOptions
    });
  }
}
