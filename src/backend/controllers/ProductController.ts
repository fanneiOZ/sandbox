import { Controller, Header, Get, Put, Param, Post, HttpCode, Body } from "@nestjs/common";
import { ProductService } from '../providers/product/service/ProductService';

@Controller('product')
export class ProductController {
    /**
     * 
     * @param productService 
     */
    constructor(private productService: ProductService) {}

    @Get('all')
    @Header('Content-Type','application/json')    
    getAll(): string {        
        return JSON.stringify(this.productService.getProducts());
    }

    @Post('add')  
    @HttpCode(204)
    put(@Body() req: {name: string}) {
        this.productService.createProduct(req.name);
    }
}