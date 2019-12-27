import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';  // <---此處為新增
import * as ormconfig from './ormconfig'; // <---此處為新增
@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot(ormconfig),  // <---此處為新增
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
