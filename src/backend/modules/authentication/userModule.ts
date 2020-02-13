import { Module } from "@nestjs/common";
import { UserService } from "./service/userService";

@Module({
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}