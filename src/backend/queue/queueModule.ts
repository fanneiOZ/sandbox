import { Module, DynamicModule } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { ConfigurationService } from '../configuration/service/configurationService';
import { CacheConfig } from '../configuration/interface/cacheConfig';
import { ConfigurationModule } from '../configuration/configurationModule';

@Module({
  imports: [BullModule, ConfigurationModule],
})
export class QueueModule extends BullModule {
  static cacheConfig = new ConfigurationService().resolve(
    'cache',
  ) as CacheConfig;

  public static register(queueName): DynamicModule {
    return QueueModule.registerQueue({
      name: queueName,
      redis: {
        host: this.cacheConfig.redisHost,
        port: this.cacheConfig.redisPort,
      },
    });
  }
}
