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
    res.json('index');
  }
}

export default new HomeController();
