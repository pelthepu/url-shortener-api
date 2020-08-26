import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from './shared/services/database/database.service';
import { ShortenerModule } from './shortener/shortener.module';

@Module({
  imports: [
    ProductModule,
    TypeOrmModule.forRootAsync({
      useClass: DatabaseService
    }),
    ShortenerModule,
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
