import { AbstractModel } from '../../database/adaptor/sequelize/abstractModel';
import { DataTypes } from 'sequelize';
import { PersonNameInterface } from '../interface/personNameInterface';
import { sprintf } from 'sprintf-js';
import { ThirdPartyProfileInterface } from '../interface/thirdPartyProfileInterface';
import validator from 'validator';
import { UserInterface } from '../interface/userInterface';

export class User extends AbstractModel implements UserInterface {
  public id: number;
  public name: PersonNameInterface;
  public email: string;
  public thirdPartyProfile: ThirdPartyProfileInterface;
  public password: string;
  private readonly createdAt!: Date;
  private readonly updatedAt!: Date;

  public static tableName = 'users';
  public static modelAttributes = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      get() {
        return this.getDataValue('id');
      },
    },
    password: {
      type: new DataTypes.STRING(255),
      allowNull: false,
      get() {
        return this.getDataValue('password');
      },
      set(value: string) {
        this.setDataValue('password', value);
      },
    },
    email: {
      type: new DataTypes.STRING(150),
      unique: true,
      allowNull: false,
      get() {
        return this.getDataValue('email');
      },
      validate: {
        isValid: (value: string) => {
          if (!validator.isEmail(value)) {
            throw Error('');
          }
        },
      },
    },
    name: {
      type: DataTypes.JSONB,
      allowNull: false,
      get() {
        return this.getDataValue('name') as PersonNameInterface;
      },
      set(value: PersonNameInterface) {
        this.setDataValue('name', value);
      },
    },
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        const name = this.getDataValue('name') as PersonNameInterface;
        return sprintf(
          '%s%s %s',
          name.title ?? '',
          name.firstName ?? '',
          (name.middleName ? name.middleName + ' ' : '') +
            (name.lastName ?? ''),
        );
      },
    },
    thirdPartyProfile: {
      field: 'third_party_profile',
      type: DataTypes.JSONB,
      get() {
        return this.getDataValue('thirdPartyProfile');
      },
      set(value: ThirdPartyProfileInterface) {
        this.setDataValue('thidPartyProfile', value);
      },
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
    },
  };
}
