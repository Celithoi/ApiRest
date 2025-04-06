import Aluno from '../models/Aluno.js';

// class HomeController {
//   index(req, res) {
//     res.json({
//       tudoCerto: true,
//     });
//   }
// }

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'marcelo',
      sobrenome: 'henrique',
      email: 'mhrcardoso@gmail.com',
      idade: 123,
      peso: 123,
      altura: 123,
    });
    res.json({
      novoAluno
      //tudoCerto: true,
    });
  }
}

export default new HomeController();
