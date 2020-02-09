import { Module } from '@nestjs/common';
import { ProductController } from '../controllers/ProductController';
import { ProductService } from '../providers/product/service/ProductService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../providers/product/entity/Product';
import { DatabaseModule } from './db.module';

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
