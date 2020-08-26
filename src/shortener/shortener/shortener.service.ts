import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Shortener } from '../shortener.entity';
import { Repository } from 'typeorm';
import moment = require("moment");

@Injectable()
export class ShortenerService {
  constructor(
    @InjectRepository(Shortener) private ProductRepository: Repository<Shortener>
  ) { }

  async findByTinyUrl(tinyUrl: string): Promise<Shortener> {
    return await this.ProductRepository.findOne({
      where: { tinyUrl }
    });
  }

  async create(shortener: Shortener): Promise<Shortener> {

    let hasFoundUniqueTinyUrl = false;

    do {
      shortener.tinyUrl = this._getRandomString();

      // If the generated code already exists, generate a new one
      hasFoundUniqueTinyUrl = !!await this.findByTinyUrl(shortener.tinyUrl);
    } while (hasFoundUniqueTinyUrl);

    // Expire after 15 days
    shortener.expireAt = moment().add(15, 'days').toDate();

    return await this.ProductRepository.save(shortener);
  }

  private _getRandomString(): string {
    return Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 6);
  }
}
