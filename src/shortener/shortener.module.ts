import { Module } from '@nestjs/common';
import { ShortenerService } from './shortener/shortener.service';
import { ShortenerController } from './shortener/shortener.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shortener } from './shortener.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Shortener])
  ],
  providers: [ShortenerService],
  controllers: [ShortenerController]
})
export class ShortenerModule {}
