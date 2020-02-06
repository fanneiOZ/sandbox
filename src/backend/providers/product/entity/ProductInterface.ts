export namespace Backend.Providers.Product.Entity {
    
    interface ProductInterface {
        /**
         * @returns number
         */
        getId(): number;

        /**
         * @returns string
         */
        getName(): string;
        
        /**
         * @param name 
         * @returns this
         */
        setName(name: string): ProductInterface;
    }
}