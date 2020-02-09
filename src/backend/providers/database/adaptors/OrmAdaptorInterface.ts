export interface OrmAdaptorInterface {
    connectDatabase(): void; 
    initialize(): void;
}