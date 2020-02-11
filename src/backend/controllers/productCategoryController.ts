import { Controller, Post, Body, HttpCode, Header } from '@nestjs/common';
import { ProductCategoryService } from '../modules/product/service/productCategoryService';

@Controller('product/category')
export class ProductCategoryController {
  constructor(protected productCategoryService: ProductCategoryService) {}
  @Post('add')
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  addProductCategory(@Body() req: { code: string; label: string }) {
    return this.productCategoryService.createProductCategory(
      req.code,
      req.label,
    );
  }
}
