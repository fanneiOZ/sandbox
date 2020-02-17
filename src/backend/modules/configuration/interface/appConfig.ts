import { ConfigurationInterface } from './configurationInterface';

export class AppConfig implements ConfigurationInterface {
  public name = 'application';
  constructor(readonly port: number) {}
}
