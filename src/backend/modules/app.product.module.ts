import { Module } from '@nestjs/common';
import { ProductController } from '../controllers/ProductController';
import { ProductService } from '../providers/product/service/ProductService';

@Module({
  imports: [],
  controllers: [
    ProductController
  ],
  providers: [
    ProductService
  ],
})
export class ProductModule {}
