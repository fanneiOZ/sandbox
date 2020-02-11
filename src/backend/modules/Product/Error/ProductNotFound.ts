import { AbstractError } from '../../error/AbstractError';

export class ProductNotFound extends AbstractError {
    constructor(data?: any) {
        super(
            'Product Not Found',
            {
                data: data,
                logData: true
            }
        );
    }
}