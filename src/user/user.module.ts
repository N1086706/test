import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './model/user.entity';

@Module({
  imports: [ // <--此處為新增
    TypeOrmModule.forFeature([User]),  // <--此處為新增
  ], // <--此處為新增
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
