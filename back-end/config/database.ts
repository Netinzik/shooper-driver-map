import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const sequelize = new Sequelize(
  process.env.DB_NAME || '',
  process.env.DB_USER || '',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    dialect: 'postgres',
  }
);

export default sequelize;
