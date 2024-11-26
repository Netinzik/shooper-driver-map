import sequelize from '../config/database';
import Driver from './Driver';

const db = {
  sequelize,
  Driver,
};

export default db;