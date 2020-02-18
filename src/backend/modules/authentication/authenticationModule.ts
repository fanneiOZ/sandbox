import { Module } from "@nestjs/common";
import { AuthenticationService } from "./service/authenicationService";
import { LocalStrategy } from "./strategy/localStrategy";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "../user/userModule";
import { CryptoModule } from "../crypto/cryptoModule";
import { AuthController } from "./controller/authController";

@Module({
  imports: [PassportModule, UserModule, CryptoModule],
  controllers: [AuthController],
  providers: [AuthenticationService, LocalStrategy]
})
export class AuthenticationModule {}