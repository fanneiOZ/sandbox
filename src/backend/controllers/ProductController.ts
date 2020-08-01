import { Controller, Header, Get, Post, HttpCode, Body } from "@nestjs/common";
import { ProductService } from '../providers/product/service/ProductService';

@Controller('product')
export class ProductController {
    /**
     * @param productService 
     */
    constructor(private productService: ProductService) {}

    @Get('all')
    @Header('Content-Type','application/json')    
    async getAll() {
        const products = await this.productService.getProducts();
        return JSON.stringify(products);
    }

    @Post('add')  
    @HttpCode(200)
    @Header('Content-Type','application/json')
    async addProduct(@Body() req: {name: string}) {
        return this.productService.createProduct(req.name);
    }
}