import User from '../models/User.js';
import jwt from 'jsonwebtoken';


class TokenController {
  async store(req, res) {
    //recebendo no usuário as informações de email e senha
    const { email = '', password = '' } = req.body;
    // verificando se a pessoa digitou login e senha
    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais Inválidas']
      });
    }
    // fazendo uma busca no servidor pelo "email"
    const user = await User.findOne({ where: { email: email } });
    // verificando se o usuário Existe
    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe']
      });
    }
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha inválida']
      });
    }
    const { id } = user;
    const token = jwt.sign(
      { id, email },
      process.env.TOKEN_SECRET,
      { expiresIn: process.env.TOKEN_EXPIRATION }
    );

    return res.json({ token });

  }
}

export default new TokenController();
