import multer from 'multer';
import multerConfig from '../config/multerConfig.js';
import Foto from '../models/Foto.js';
const upload = multer(multerConfig).single('foto');

class FotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [errors.code],
        });
      }

      const { originalname, filename } = req.file;
      console.log('req.body:', req.body);
      const { aluno_id } = req.body;
      const foto = await Foto.create({ originalname, filename, aluno_id });

      return res.json(foto);
    });

  }
}

export default new FotoController();
