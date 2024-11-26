import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface DriverAttributes {
  id: number;
  nome: string;
  descricao: string;
  carro: string;
  avaliacao: string;
  taxa_km: string;
  km_minimo: number;
}

type DriverCreationAttributes = Optional<DriverAttributes, 'id'>;

class Driver extends Model<DriverAttributes, DriverCreationAttributes> implements DriverAttributes {
  public id!: number;
  public nome!: string;
  public descricao!: string;
  public carro!: string;
  public avaliacao!: string;
  public taxa_km!: string;
  public km_minimo!: number;
}

Driver.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    carro: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    avaliacao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    taxa_km: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    km_minimo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Driver',
    tableName: 'drivers',
  }
);

export default Driver;
