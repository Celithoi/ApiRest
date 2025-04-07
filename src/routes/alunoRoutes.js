import { Router } from 'express';
import AlunoController from '../controllers/AlunoController.js';

const router = new Router();

router.get('/', AlunoController.index);

export default router;
