import { Injectable, Scope } from "@nestjs/common";
import { Product } from '../entity/product';
import { ProductNotFound } from "../error/productNotFound";
import { Op } from "sequelize";

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
            .then(data => {
                return data 
                    ?? new ProductNotFound(
                        {id: productId}
                    )
            })
            .catch(error => {return error});
    }

    public deactivateProductById(productId: any) {
        return Product.update(
            {active: false},
            {where: {id: { [Op.eq]: <number>productId } }}
            )
            .then(data => {
                return data 
                    ?? new ProductNotFound(
                        {id: productId}
                    )
            })
            .catch(error => {return error});
    }
}
