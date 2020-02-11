import { ConfigurationInterface } from "./configurationInterface";

export class DbConfig implements ConfigurationInterface {
    
    constructor(
        public readonly host: string,
        public readonly port: number,
        public readonly name: string,
        public readonly username: string,
        public readonly password: string
    ) {}
}
