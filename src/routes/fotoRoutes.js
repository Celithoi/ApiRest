import { Router } from 'express';
import multer from 'multer';
import FotoController from '../controllers/fotoController.js';
import multerConfig from '../config/multerConfig.js';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('foto'), FotoController.store);

export default router;
