import { Router } from 'express';
import DriverController from '../controllers/DriverController';

const router = Router();

router.get('/drivers', DriverController.list);

export default router;
