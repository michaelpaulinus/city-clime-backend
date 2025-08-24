import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './weather/weather.module';
import { FirebaseModule } from './firebase/firebase.module';

@Module({
  imports: [WeatherModule, FirebaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
