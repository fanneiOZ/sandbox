import { Controller, Header, Get, Put, Param, Post, HttpCode, Body, Delete } from "@nestjs/common";
import { ProductService } from '../Modules/Product/Service/ProductService';

@Controller('product')
export class ProductController {
    /**
     * @param productService 
     */
    constructor(private productService: ProductService) {}

    @Get('all')
    @Header('Content-Type','application/json')    
    async getAll() {
        let products = await this.productService.getProducts();
        return JSON.stringify(products);
    }

    @Post('add')  
    @HttpCode(200)
    @Header('Content-Type','application/json')
    async addProduct(@Body() req: {name: string}) {
        return this.productService.createProduct(req.name);
    }

    @Get(':id')
    @Header('Content-Type','application/json')
    async getById(@Param('id') id: string) {
        return JSON.stringify(await this.productService.findProductById(id));
    }

    @Delete(':id')
    @Header('Content-Type','application/json')
    @HttpCode(204)
    async deleteById(@Param('id') id: string) {
        await this.productService.deactivateProductById(id);
    }
}