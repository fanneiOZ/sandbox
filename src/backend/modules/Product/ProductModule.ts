import { Module } from '@nestjs/common';
import { ProductController } from 'src/backend/Controllers/ProductController';
import { ProductService } from './Service/ProductService';
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
