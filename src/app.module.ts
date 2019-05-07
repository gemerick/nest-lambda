import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LanguagesController } from './languages.controller';

@Module({
  imports: [],
  controllers: [AppController, LanguagesController],
  providers: [AppService],
})
export class AppModule {}
