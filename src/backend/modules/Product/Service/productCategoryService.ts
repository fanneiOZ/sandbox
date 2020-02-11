import { Injectable, Scope } from '@nestjs/common';
import { ProductCategory } from '../entity/productCategory';
import { Op } from 'sequelize';

@Injectable({ scope: Scope.REQUEST })
export class ProductCategoryService {
  /**
   * @param id: any
   * @returns Promise<ProductCategory>
   */
  public findCategoryById(id: any): Promise<ProductCategory> {
    return ProductCategory.findByPk(id as number)
      .then(data => {
        return data ?? '';
      })
      .catch(error => {
        return error;
      });
  }
  /**
   * @param code: string
   * @returns Promise<ProductCategory>
   */
  public findCategoryByCode(code: string): Promise<ProductCategory> {
    return ProductCategory.findOne({ where: { code: { [Op.eq]: code } } });
  }

  /**
   * @param code: string
   * @param label: string
   * @returns Promis<ProductCategory>
   */
  public createProductCategory(
    code: string,
    label: string,
  ): Promise<ProductCategory> {
    return ProductCategory.build({ code: code, label: label })
      .save()
      .then(data => {
        return data;
      });
  }
}
