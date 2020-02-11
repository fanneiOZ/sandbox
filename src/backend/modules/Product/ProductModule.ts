import { Module } from '@nestjs/common';
import { ProductController } from 'src/backend/controllers/productController';
import { ProductService } from './service/productService';
import { DatabaseModule } from '../database/databaseModule';
import { ProductCategoryController } from 'src/backend/controllers/productCategoryController';
import { ProductCategoryService } from './service/productCategoryService';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController, ProductCategoryController],
  providers: [ProductService, ProductCategoryService],
})
export class ProductModule {}
