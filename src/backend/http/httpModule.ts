import {
  Module,
  HttpModule as NestHttpModule,
  forwardRef,
} from '@nestjs/common';
import { ConfigurationModule } from '../configuration/configurationModule';

@Module({
  imports: [forwardRef(() => ConfigurationModule)],
})
export class HttpModule extends NestHttpModule {}
