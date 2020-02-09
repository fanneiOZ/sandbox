import { Model, ModelAttributes} from "sequelize";

export abstract class AbstractModel extends Model {
    public static tableName: string;
    public static modelAttributes: ModelAttributes;
}