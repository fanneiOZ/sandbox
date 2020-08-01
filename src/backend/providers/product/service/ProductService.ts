import { Injectable, Scope } from "@nestjs/common";
import { Product } from '../entity/Product';

@Injectable({scope: Scope.REQUEST})    
export class ProductService  {    
    public getProducts() {        
        return Product.findAll();
    }

    public async createProduct(name: string): Promise<void> {
        try {
            await Product.build({name: name}).save()
        } catch (e) {
            console.log(`save error: ${e}`)
            throw e
        }
    }
}
