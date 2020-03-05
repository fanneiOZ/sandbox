import { Controller, Body, Post, Get, Query } from '@nestjs/common';
import { UserInterface } from '../interface/userInterface';
import { UserService } from '../service/userService';
import { User } from '../model/user';
import { CryptoService } from '../../crypto/service/cryptoService';
import { PersonNameInterface } from '../interface/personNameInterface';
import validator from 'validator';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly crytoService: CryptoService,
  ) {}

  @Post('create/local')
  public async createLocalUser(
    @Body() req: { email: string; name: PersonNameInterface; password: string },
  ): Promise<any> {
    if (!validator.isEmail(req.email)) {
      throw Error('Validation Failed: Email Invalid ' + req.email);
    }
    if (!validator.isLength(req.password, { min: 8 })) {
      throw Error('Validation Failed: Password less than 8 charactor');
    }
    const userOptions: UserInterface = {
      email: req.email,
      name: req.name,
      password: this.crytoService.encrypt(req.password),
    };
    const userInstance: User = this.userService.buildUser(userOptions);
    return await this.userService.saveUser(userInstance);
  }

  @Get()
  public async getUser(@Query('email') email: string): Promise<any> {
    return (await this.userService.findByEmail(email)) ?? {};    
  }
}
