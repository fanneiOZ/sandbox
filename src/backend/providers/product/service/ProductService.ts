import { Injectable, Scope } from "@nestjs/common";
import { Product } from '../entity/Product';
import { ProductInterface } from "../entity/ProductInterface";

@Injectable({ scope: Scope.REQUEST })    
export class ProductService {
    /**
     * @param id 
     * @returns ProductInterface
     */
    public getProductById(id: number): ProductInterface {
        return new Product(id, 'a#' + id.toString());
    }
}
