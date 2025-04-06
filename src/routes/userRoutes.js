import { Router } from 'express';
import UserController from '../controllers/UserController.js';
import loginRequired from '../middlewares/loginRequired.js';

const router = new Router();
// não deveria existir - falta de segurança
router.get('/', loginRequired, UserController.index); // lista usuarios
router.get('/:id', UserController.show); // lista usuarios

router.post('/', UserController.store);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;



/*

index -> Lista todos os usuários -> GET
store/create -> cria um novo usuario - POST
delete -> apaga usuário - DELTE
show -> mostra um usuário - GET
update -> atualiza um usuário - PATCH ou PUT

*/
