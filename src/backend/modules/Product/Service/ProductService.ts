import { Injectable, Scope } from '@nestjs/common';
import { Product } from '../entity/product';
import { ProductNotFound } from '../error/productNotFound';
import { Op } from 'sequelize';
import { ProductCategory } from '../entity/productCategory';

@Injectable({ scope: Scope.REQUEST })
export class ProductService {
  public getProducts(active = true) {
    return Product.findAll({ where: { active: active }, include: [ProductCategory] });
  }

  public createProduct(name: string, productNumber: string) {
    return Product.build({ name: name, productNumber: productNumber })
      .save()
      .then(data => {
        return data;
      })
      .catch(e => {
        return e;
      });
  }

  public findProductById(productId: any) {
    return Product.findOne({
        where: { id: productId },
        include: [ProductCategory],
      })
      .then(data => {
        return data ?? new ProductNotFound({ id: productId });
      })
      .catch(error => {
        return error;
      });
  }

  public deactivateProductById(productId: any) {
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
