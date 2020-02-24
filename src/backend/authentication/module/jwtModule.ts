import { JwtModule } from '@nestjs/jwt';
import { Module, forwardRef, DynamicModule } from '@nestjs/common';
import { ConfigurationModule } from '../../configuration/configurationModule';
import { ConfigurationService } from '../../configuration/service/configurationService';
import { SecretKeyProvider } from '../service/secretKeyProvider';

@Module({
  imports: [
    forwardRef(() => {
      ConfigurationModule;
    }),
  ],
})
export class SetupJwtModule extends JwtModule {
  private static readonly jwtModuleOptions = new SecretKeyProvider(
    new ConfigurationService(),
  ).jwtModuleOptions;

  public static setup(): DynamicModule {
    return this.register({
      secret: this.jwtModuleOptions.secret,
      signOptions: this.jwtModuleOptions.signOptions,
    });
  }
}
