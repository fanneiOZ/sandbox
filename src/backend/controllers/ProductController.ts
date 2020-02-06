import { Controller, Header, Get, Res, HttpStatus } from "@nestjs/common";
import { Response } from 'express';

@Controller('product')
export class ProductController {
    @Get()
    @Header('Content-Type','application/json')
    getAll(): string {
        return JSON.stringify([
            {
                id: 'AB-2324',
                product_name: 'AB Test 2324'
            },
            {
                id: 'AB-2322',
                product_name: 'AB Test 2322'
            }
        ]);
    }

    @Get('express')
    getAllExp(@Res() res: Response) {
        res.status(HttpStatus.OK).json([{
            id: 'AB-2324',
            product_name: 'AB Test 2324'
        },
        {
            id: 'AB-2322',
            product_name: 'AB Test 2322'
        }]);
    }
}