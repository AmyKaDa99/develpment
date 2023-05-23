import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { forwardRef } from '@nestjs/common/utils';


@Module({
  imports: [
    forwardRef(() => UserModule),
  ],
  controllers: [UserController],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule { }
