import { Controller, Param, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { ShortenerService } from './shortener.service';
import { Shortener } from '../shortener.entity';

@Controller('shortener')
export class ShortenerController {
  constructor(
    private shortenerService: ShortenerService
  ) { }

  @Get(':tinyUrl')
  index(@Param('tinyUrl') tinyUrl): Promise<Shortener> {
    return this.shortenerService.findByTinyUrl(tinyUrl);
  }

  @Post('create')
  async create(@Body() shortenerData: Shortener): Promise<any> {
    return this.shortenerService.create(shortenerData);
  }
}
