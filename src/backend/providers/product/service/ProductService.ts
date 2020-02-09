import { Injectable } from "@nestjs/common";
import { Product } from '../entity/Product';

@Injectable()    
export class ProductService {
    
    public getProducts() {
        return Product.findAll().thenReturn(products => {return products});
    }

    public createProduct(name: string): boolean {
        let result: boolean = false;

        Product.build({name: name})
            .save()
            .then(() => {
                result = true;
            })
            .catch(e => {
                console.error('Saving Error ')
                result = false;
            })

        return result;
    }
}
