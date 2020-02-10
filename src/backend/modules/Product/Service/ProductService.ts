import { Injectable, Scope } from "@nestjs/common";
import { Product } from '../Entity/Product';
import { ProductNotFound } from "../Error/ProductNotFound";
import { ProductInterface } from "../Entity/ProductInterface";

@Injectable({scope: Scope.REQUEST})    
export class ProductService  {
    public getProducts() {
        return Product.findAll();
    }

    public createProduct(name: string) {
        return Product.build({name: name})
            .save()
            .then(data => {return data})
            .catch(e => {return e});
    }

    public findProductById(productId: any) {
        return Product.findByPk(<number>productId)
            .then(data => {return data ?? new ProductNotFound(productId)})
            .catch(error => {return error});        
    }
}
