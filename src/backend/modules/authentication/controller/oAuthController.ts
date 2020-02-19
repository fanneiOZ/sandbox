import { Controller, Request, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('oauth')
export class OAuthController {
  @UseGuards(AuthGuard('google'))
  @Get('google')
  public login() {}

  @Get('google/verify')
  public verify(@Request() req) {
    return req.query;
  }
}
