import { Injectable, Scope } from "@nestjs/common";
import { ProductCategory } from "../entity/productCategory";
import { Op } from "sequelize";

@Injectable({scope: Scope.REQUEST})
export class ProductCategoryService {
  public findCategoryById(id: any) {
    return ProductCategory.findByPk(id as number)
      .then(data => {return data ?? ''})
      .catch(error => {return error});
  }

  public findCategoryByCode(code: string) {
    return ProductCategory.findOne({where: {code: {[Op.eq]: code}}});
  }

  public createProductCategory(code: string, label: string) {
    return ProductCategory.build({code: code, label: label})
      .save()
      .then(data => {
        return data
      });
  }
}