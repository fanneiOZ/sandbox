import { Module, forwardRef } from '@nestjs/common';
import { ConfigurationModule } from '../configuration/configurationModule';
import { CryptoService } from './service/cryptoService';

@Module({
  imports: [forwardRef(() => ConfigurationModule)],
  providers: [CryptoService],
  exports: [CryptoService],
})
export class CryptoModule {}
