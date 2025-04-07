import Aluno from '../models/Aluno.js';


class AlunoController {

  // função para achar todos os valores dentro do banco de dados
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }
  // função para criar aluno no banco de Dados
  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors?.map((err) => err.message) || ['Ocorreu um erro inesperado.']
      });
    }
  }
  // função SHOW do banco aluno
  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID']
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe']
        });
      }
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.erros?.map(err => err.message)
      });
    }
  }
  // função para DELETAR o aluno do banco
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID']
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe']
        });
      }
      await aluno.destroy;
      return res.json({
        apagado: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.erros?.map(err => err.message)
      });
    }
  }
  // função para atualizar os dados do aluno no banco de dados.
  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['FALTANDO ID']
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe']
        });
      }
      const alunoAtualizado = await aluno.update(req.body);
      return res.json(alunoAtualizado);
    } catch (e) {

    }
  }


}

export default new AlunoController();
