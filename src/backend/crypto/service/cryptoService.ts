import { Injectable } from '@nestjs/common';
import { ConfigurationService } from '../../configuration/service/configurationService';
import { SecurityConfig } from '../../configuration/interface/securityConfig';
import Crypto = require('crypto-js');

@Injectable()
export class CryptoService {
  private secretKey: string;
  constructor(readonly configurationService: ConfigurationService) {
    this.secretKey = (configurationService.resolve(
      'security',
    ) as SecurityConfig).encryptedKey;
  }

  public encrypt(value: string): string {
    return Crypto.DES.encrypt(value, this.secretKey).toString();
  }

  public decrypt(cipherText: string): string {
    return Crypto.DES.decrypt(cipherText, this.secretKey).toString(
      Crypto.enc.Utf8,
    );
  }
}
