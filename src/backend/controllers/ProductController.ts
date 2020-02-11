import {
  Controller,
  Header,
  Get,
  Param,
  Post,
  HttpCode,
  Body,
  Delete,
} from '@nestjs/common';
import { ProductService } from '../modules/product/service/productService';
import { ProductCategoryService } from '../modules/product/service/productCategoryService';
import { ProductCategory } from '../modules/product/entity/productCategory';

@Controller('product')
export class ProductController {
  /**
   * @param productService
   */
  constructor(
    private productService: ProductService,
    private productCategoryService: ProductCategoryService,
  ) {}

  @Get('all')
  @Header('Content-Type', 'application/json')
  async getAll() {
    const products = await this.productService.getProducts();
    return JSON.stringify(products);
  }

  @Post('add')
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  async addProduct(
    @Body()
    req: {
      name: string;
      productNumber: string;
      productCategory: { code?: string; id?: number };
    },
  ) {
    let category: ProductCategory;
    if (req.productCategory.code) {
      category = await this.productCategoryService.findCategoryByCode(
        req.productCategory.code,
      );
    } else if (req.productCategory.id) {
      category = await this.productCategoryService.findCategoryById(
        req.productCategory.id,
      );
    }
    return this.productService.createProduct(
      req.name,
      req.productNumber,
      category.id,
    );
  }

  @Get(':id')
  @Header('Content-Type', 'application/json')
  async getById(@Param('id') id: string) {
    const product = await this.productService.findProductById(id);
    // const category = await product.getProductCategory();
    return JSON.stringify([product]);
  }

  @Delete(':id')
  @Header('Content-Type', 'application/json')
  @HttpCode(204)
  async deleteById(@Param('id') id: string) {
    await this.productService.deactivateProductById(id);
  }
}
