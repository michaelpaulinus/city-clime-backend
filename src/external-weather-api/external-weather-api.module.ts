import { Module } from '@nestjs/common';
import { ExternalWeatherApiController } from './external-weather-api.controller';
import { ExternalWeatherApiService } from './external-weather-api.service';

@Module({
  controllers: [ExternalWeatherApiController],
  providers: [ExternalWeatherApiService]
})
export class ExternalWeatherApiModule {}
