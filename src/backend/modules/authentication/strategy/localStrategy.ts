import { Strategy } from 'passport-local';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { AuthenticationService } from '../service/authenicationService';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthenticationService) {
    super();
  }

  public async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateByPassword(username, password);    
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}