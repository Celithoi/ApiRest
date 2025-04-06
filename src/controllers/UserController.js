import User from '../models/User.js';

class UserController {

  // Create

  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      // dentro do User.create(aquiXXX) estamos enviando os dados
      // requisitados pelo req,res
      // {
      //   nome: 'marcelo',
      //   email: 'mhrcardoso@gmail.com',
      //   password: '12345678'
      // }
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message)
      });
    }
  }

  // index

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['nome', 'id', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // show

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, nome, email, } = user;
      return res.json({ id, nome, email, });
    } catch (e) {
      return res.json(null);
    }
  }

  // update

  async update(req, res) {
    try {
      // procurar no banco se o id corresponde a um valor unico
      const user = await User.findByPk(req.userId);
      // verifica se o usuário existe
      if (!user) {
        return res.status(400).json({
          erros: ['Usuário não existe']
        });
      }
      // Envia os dados
      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors?.map((err) => err.message) || ['Ocorreu um erro inesperado.']
      });
    }
  }
  // delete
  async delete(req, res) {
    try {

      // procurar no banco se o id corresponde a um valor unico
      const user = await User.findByPk(req.userId);

      // verifica se o usuário existe
      if (!user) {
        return res.status(400).json({
          erros: ['Usuário não existe']
        });
      }
      // apaga os dados
      user.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors?.map((err) => err.message) || ['Ocorreu um erro inesperado.']
      });
    }
  }

}

export default new UserController();
