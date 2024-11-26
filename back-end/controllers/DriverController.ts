import { Request, Response } from 'express';
import Driver from '../models/Driver';

const DriverController = {
  async list(_: Request, res: Response): Promise<void> {
    try {
      const drivers = await Driver.findAll();
      res.json(drivers);
    } catch (error) {
      if (!(error instanceof Error)) {
        res.status(500).json({ error: 'Erro desconhecido!' })
        return;
      }
      res.status(500).json({ error: error.message });
    }
  },
};

export default DriverController;
