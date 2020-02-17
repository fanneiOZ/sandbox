import { Injectable, Scope } from '@nestjs/common';
import { ConfigurationInterface } from '../../configuration/interface/configurationInterface';
import { ConfigurationService } from '../../configuration/service/configurationService';
import { HttpClient } from '../client/httpClient';

@Injectable({ scope: Scope.REQUEST })
export class HttpClientFactory {
  constructor(private readonly configService: ConfigurationService) {}

  public create(client: HttpClient) {
    const config: ConfigurationInterface = this.configService.resolve(
      client.toString(),
    );
    switch (client) {
      default:
        return;
    }
  }
}
