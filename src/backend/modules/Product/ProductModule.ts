import { Module } from '@nestjs/common';
import { ProductController } from 'src/backend/controllers/productController';
import { ProductService } from './service/productService';
import { DatabaseService } from '../database/databaseService';

@Module({
  imports: [],
  controllers: [
    ProductController
  ],
  providers: [
    ProductService,
    DatabaseService
  ],
})
export class ProductModule {}
