import { Injectable } from "@nestjs/common";

namespace Backend.Providers.Product.Service {

    @Injectable()
    export class ProductService {
        /**
         * @param id 
         * @returns ProductInterface
         */
        public static getProductById(id: number): Entity  {
            return new Product(id, 'a');
        }
    }
}