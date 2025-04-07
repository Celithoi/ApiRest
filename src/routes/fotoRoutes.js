import { Router } from 'express';
import FotoController from '../controllers/fotoController.js';

const router = new Router();

router.post('/', FotoController.store);

export default router;
