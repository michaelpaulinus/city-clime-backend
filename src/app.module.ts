import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirebaseModule } from './firebase/firebase.module';
import { ExternalWeatherApiModule } from './external-weather-api/external-weather-api.module';

@Module({
  imports: [FirebaseModule, ExternalWeatherApiModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
