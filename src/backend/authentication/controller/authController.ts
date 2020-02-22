import {
  Controller,
  Post,
  Request,
  UseGuards,
  Header,
  Get,
  Response,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticationService } from '../service/authenicationService';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthenticationService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @Header('Content-Type', 'application/json')
  public login(@Request() req) {
    return { token: this.authService.assignJwtToken(req.user) };
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('login/jwt')
  public loginJwt(@Request() req, @Response() res) {
    res.setHeader('token-user-id', req.user.id);
    res.setHeader('token-user-email', req.user.email);
    return res.send({ status: 'logged in' });
  }
}
