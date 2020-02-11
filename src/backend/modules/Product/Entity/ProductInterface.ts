export interface ProductInterface {
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
