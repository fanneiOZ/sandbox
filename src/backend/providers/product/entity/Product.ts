export namespace Backend.Providers.Product.Entity {

    export class Product implements ProductInterface {
        
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
}