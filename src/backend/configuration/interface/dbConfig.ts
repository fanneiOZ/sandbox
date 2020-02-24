import { ConfigurationInterface } from './configurationInterface';

export class DbConfig implements ConfigurationInterface {
  public name: 'db';
  constructor(
    public readonly host: string,
    public readonly port: number,
    public readonly databaseName: string,
    public readonly username: string,
    public readonly password: string,
  ) {}
}
