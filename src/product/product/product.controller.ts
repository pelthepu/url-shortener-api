import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Product } from '../product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

  constructor(
    private productService: ProductService
  ) { }

  @Get()
  getAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  getById(@Param('id') id): Promise<Product> {
    return this.productService.findById(id);
  }

  @Post('create')
  async create(@Body() productData: Product): Promise<any> {
    return this.productService.create(productData);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() productData: Product): Promise<any> {
    productData.id = Number(id);
    return this.productService.update(productData);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.productService.delete(id);
  }
}
