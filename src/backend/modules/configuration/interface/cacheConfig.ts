import { ConfigurationInterface } from './configurationInterface';
import { Config } from './configEnumerator';

export class CacheConfig implements ConfigurationInterface {
  public name = Config.CACHE;
  constructor(readonly redisHost: string, readonly redisPort: number) {}
}
