import { Model, Sequelize } from 'sequelize';


export default class Foto extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio.'
          }
        }
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo não pode ficar vazio.'
          }
        }
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    }, {
      sequelize,
      tableName: 'fotos',
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
