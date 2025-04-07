import { Model, Sequelize } from 'sequelize';


export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          len: {
            args: [3, 255],
            msg: 'nome precisa ter entre 3 e 255 caracteres'
          }
        }
      },

      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          len: {
            args: [3, 255],
            msg: 'sobrenome precisa ter entre 3 e 255 caracteres'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email ja está sendo utilizado'
        },
        validade: {
          isEmail: {
            msg: 'Email inválido'
          }
        }
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validade: {
          isInt: {
            msg: 'Idade precisa ser um numero inteiro'
          }
        }
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validade: {
          isFloat: {
            msg: 'Peso precisa ser um numero'
          }
        }
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validade: {
          isFloat: {
            msg: 'Peso precisa ser um numero'
          }
        }
      },
    }, {
      sequelize,
    });
    return this;
  }
}
