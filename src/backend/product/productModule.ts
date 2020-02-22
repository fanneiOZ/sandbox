import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/databaseModule';
import { ProductController } from './controllers/productController';
import { ProductCategoryController } from './controllers/productCategoryController';
import { ProductCategoryService } from './service/productCategoryService';
import { ProductService } from './service/productService';
import { QueueModule } from '../queue/queueModule';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    DatabaseModule,
    QueueModule.register('product'),
    PassportModule.register({ defaultStrategy: 'jwt' })
  ],
  controllers: [ProductController, ProductCategoryController],
  providers: [ProductService, ProductCategoryService],
})
export class ProductModule {}
