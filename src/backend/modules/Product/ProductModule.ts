import { Module } from '@nestjs/common';
import { ProductController } from 'src/backend/controllers/productController';
import { ProductService } from './service/productService';
import { DatabaseModule } from '../database/databaseModule';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    ProductController
  ],
  providers: [
    ProductService
  ],
})
export class ProductModule {}
