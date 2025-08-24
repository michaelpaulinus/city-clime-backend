import { Module } from '@nestjs/common';
import { FirebaseController } from './firebase.controller';
import { FirebaseService } from './firebase.service';
import { ExternalWeatherApiService } from 'src/external-weather-api/external-weather-api.service';

@Module({
  controllers: [FirebaseController],
  providers: [FirebaseService, ExternalWeatherApiService]
})
export class FirebaseModule {}
