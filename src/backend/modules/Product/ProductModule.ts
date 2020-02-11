import { Module } from 'src/backend/Modules/product/node_modules/@nestjs/common';
import { ProductController } from 'src/backend/controllers/productController';
import { ProductService } from './service/productService';
import { DatabaseModule } from '../Database/DatabaseModule';

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
