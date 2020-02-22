import { Injectable, Scope } from '@nestjs/common';
import { ConfigurationInterface } from '../../configuration/interface/configurationInterface';
import { ConfigurationService } from '../../configuration/service/configurationService';
import { httpClientName } from '../client/httpClientInterface';

@Injectable({ scope: Scope.REQUEST })
export class HttpClientFactory {
  constructor(private readonly configService: ConfigurationService) {}

  public create(client: httpClientName) {    
    const config: ConfigurationInterface = this.configService.resolve('http');
    switch (client) {
      default:
        // TODO: add httpClient 
        return config;
    }
  }
}
