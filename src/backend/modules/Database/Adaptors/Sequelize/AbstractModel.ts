import { Model, ModelAttributes} from 'src/backend/Modules/Database/adaptors/sequelize/node_modules/sequelize';

export abstract class AbstractModel extends Model {
    public static tableName: string;
    public static modelAttributes: ModelAttributes;
}