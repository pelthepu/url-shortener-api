import { Injectable } from '@nestjs/common';
import { Product } from '../product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class ProductService {
  
  constructor(
    @InjectRepository(Product) private ProductRepository: Repository<Product>
  ) { }

  async findAll(): Promise<Product[]> {
    return await this.ProductRepository.find();
  }

  async findById(id: number): Promise<Product> {
    return await this.ProductRepository.findOneOrFail(id);
  }

  async create(product: Product): Promise<Product> {
    return await this.ProductRepository.save(product);
  }

  async update(product: Product): Promise<UpdateResult> {
    return await this.ProductRepository.update(product.id, product);
  }

  async delete(product: number): Promise<DeleteResult> {
    return await this.ProductRepository.delete(product);
  }
}
