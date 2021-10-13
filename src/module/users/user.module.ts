import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { UsersProviders } from './users.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, ...UsersProviders],
  exports: [UsersService],
})
export class UserModule {}
