import { Controller, Header, Get, Param, Post, HttpCode, Body, Delete } from "@nestjs/common";
import { ProductService } from '../modules/product/service/productService';

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
    async addProduct(@Body() req: {name: string, productNumber: string}) {
        return this.productService.createProduct(req.name, req.productNumber);
    }

    @Get(':id')
    @Header('Content-Type','application/json')
    async getById(@Param('id') id: string) {
        const product = await this.productService.findProductById(id);
        // const category = await product.getProductCategory();
        return JSON.stringify([product]);
    }

    @Delete(':id')
    @Header('Content-Type','application/json')
    @HttpCode(204)
    async deleteById(@Param('id') id: string) {
        await this.productService.deactivateProductById(id);
    }
}