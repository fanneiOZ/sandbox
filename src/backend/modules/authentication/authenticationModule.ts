import { Module } from "@nestjs/common";
import { UserModule } from "./userModule";
import { AuthenticationService } from "./service/authenicationService";
import { LocalStrategy } from "./strategy/localStrategy";
import { PassportModule } from "@nestjs/passport";

@Module({
  imports: [UserModule, PassportModule],
  providers: [AuthenticationService, LocalStrategy]
})
export class AuthenticationModule {}