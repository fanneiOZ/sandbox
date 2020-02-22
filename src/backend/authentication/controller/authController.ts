import { Controller, Post, Request, UseGuards, Header, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticationService } from '../service/authenicationService';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthenticationService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @Header('Content-Type', 'application/json')
  public login(@Request() req) {
    return this.authService.assignJwtToken(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('login/jwt')
  public loginJwt(@Request() req) {
    return req.user;
  }
}
