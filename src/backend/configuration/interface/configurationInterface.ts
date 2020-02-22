export type configurationName =
  | 'security'
  | 'cache'
  | 'db'
  | 'http'
  | 'application'
  | 'default';

export interface ConfigurationInterface {
  name: configurationName;
}

