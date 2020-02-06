import { Module } from '@nestjs/common';
import { ProductController } from './controllers/ProductController';

@Module({
  imports: [],
  controllers: [
    ProductController
  ],
  providers: [],
})
export class AppModule {}
