import express, { Application } from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as path from 'path';
import routes from './routes';
import db from './models';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', routes);

db.sequelize
  .sync({ force: false }) //`true` --> Develop 
  .then(() => {
    console.log('Database connected and models synchronized.');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('Error connecting to the database:', err));
