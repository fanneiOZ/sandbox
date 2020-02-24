import { Controller, Request, Get, UseGuards, Response } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GoogleOAuthStrategy } from '../strategy/googleOAuthStrategy';
import { Profile } from 'passport-google-oauth20';

@Controller('oauth')
export class OAuthController {
  constructor(private readonly google: GoogleOAuthStrategy) {}
  @UseGuards(AuthGuard('google'))
  @Get('google')
  public login(@Request() req) {
    console.log(req);
  }

  @Get('google/verify')
  public verify(
    @Request() req
  ) {
    // const a = {
    //   query: req.query,
    //   accessToken: accessToken,
    //   refreshToken: refreshToken,
    //   profile: profile,
    // };
    // console.log(req.headers);
    return req.query;
  }

  @Get('dummy')
  public dummy(@Request() req) {
    return req;
  }
}
