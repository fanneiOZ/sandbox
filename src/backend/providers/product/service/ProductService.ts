import { Injectable, Scope } from "@nestjs/common";
import { Product } from '../entity/Product';

@Injectable({scope: Scope.REQUEST})    
export class ProductService  {    
    public getProducts() {        
        return Product.findAll();
    }

    public createProduct(name: string) {
        return Product.build({name: name})
            .save()
            .then(() => {
                return true;
            })
            .catch(e => {
                console.error('Saving Error ')
                return false;
            });
    }
}
