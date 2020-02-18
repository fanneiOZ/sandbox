import { Controller, Post, Request, UseGuards, Header } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('login')
  @Header('Content-Type', 'application/json')
  public login(@Request() req) {
    return req.user;
  }
}
