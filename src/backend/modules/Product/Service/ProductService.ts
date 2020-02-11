import { Injectable, Scope } from '@nestjs/common';
import { Product } from '../entity/product';
import { ProductNotFound } from '../error/productNotFound';
import { Op } from 'sequelize';
import { ProductCategory } from '../entity/productCategory';
import { ProductCategoryService } from './productCategoryService';

@Injectable({ scope: Scope.REQUEST })
export class ProductService {
  constructor(public readonly categoryService: ProductCategoryService) {}

  public getProducts(active = true): Promise<Product[]> {
    return Product.findAll({
      where: { active: active },
      include: [ProductCategory],
    });
  }

  public createProduct(
    name: string,
    productNumber: string,
    categoryId: number,
  ): Promise<Product> {
    return Product.build({
      name: name,
      productNumber: productNumber,
      categoryId: categoryId,
    })
      .save()
      .then(data => {
        return data;
      })
      .catch(e => {
        return e;
      });
  }

  public findProductById(productId: any): Promise<Product> {
    const id = productId as number;
    return Product.findOne({
      where: { id: id },
      include: [ProductCategory],
    })
      .then(data => {
        return data ?? new ProductNotFound({ id: id });
      })
      .catch(error => {
        return error;
      });
  }

  public deactivateProductById(productId: any): Promise<Product> {
    return Product.update(
      { active: false },
      { where: { id: { [Op.eq]: productId as number } } },
    )
      .then(data => {
        return data ?? new ProductNotFound({ id: productId });
      })
      .catch(error => {
        return error;
      });
  }
}
