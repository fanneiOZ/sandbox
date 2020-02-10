export class ProductNotFound extends Error {
    constructor(data: any)
    {
        super();
        this.name = "Product Not Found";
        this.message = this.name + ": id " + <string>data;        
    }
}