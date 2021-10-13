import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configuration } from './config/configuration';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './module/auth/auth.module';
import { UserModule } from './module/users/user.module';

@Module({
  imports: [
    // for use environments
    ConfigModule.forRoot({
      load: [configuration],
    }),
    DatabaseModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
