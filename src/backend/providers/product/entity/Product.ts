import { ProductInterface } from './ProductInterface';

export class Product implements ProductInterface {
    /**
     * Product Entity Constructor
     * @param id 
     * @param name 
     */
    constructor(protected id: number, protected name: string) {}

    /**
     * @inheritdoc
     */
    getId(): number {
        return this.id;
    }

    /**
     * @inheritdoc
     */
    getName(): string {
        return this.name;            
    }

    /**
     * @inheritdoc
     */
    setName(name: string): ProductInterface {
        this.name = name;
        return this;
    }

}
