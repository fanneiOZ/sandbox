import { Controller, Header, Get } from "@nestjs/common";
import { ProductService } from '../providers/product/service/ProductService';

@Controller('product')
export class ProductController {
    /**
     * 
     * @param productService 
     */
    constructor(private productService: ProductService) {}

    @Get()
    @Header('Content-Type','application/json')    
    getAll(): string {
        return JSON.stringify([
            this.productService.getProductById(2),
            this.productService.getProductById(1),
            this.productService.getProductById(3),
        ]);
    }
}