import { ConfigurationInterface } from './configurationInterface';

export class CacheConfig implements ConfigurationInterface {
  public name: 'cache';
  constructor(readonly redisHost: string, readonly redisPort: number) {}
}
