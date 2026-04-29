import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CarModule } from './car/car.module';
import { RentalModule } from './rental/rental.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), CarModule, RentalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
