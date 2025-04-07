import { Router } from 'express';
import AlunoController from '../controllers/AlunoController.js';
import loginRequired from '../middlewares/loginRequired.js';

const router = new Router();

router.get('/', AlunoController.index);
router.post('/', loginRequired, AlunoController.store);
router.put('/:id', loginRequired, AlunoController.update);
router.get('/:id', AlunoController.show);
router.delete('/:id', loginRequired, AlunoController.delete);

export default router;









/*

index -> Lista todos os usuários -> GET
store/create -> cria um novo usuario - POST
delete -> apaga usuário - DELTE
show -> mostra um usuário - GET
update -> atualiza um usuário - PATCH ou PUT

*/
