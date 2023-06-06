import { Model, DataTypes } from 'sequelize';

class Local extends Model {

  static init(sequelize) {
    super.init({
      predio: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "O predio não pode ser nulo!" },
          notEmpty: { msg: "O predio não pode ser vazia!" },
        }
      },
      andar: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "O andar não pode ser nulo!" },
          notEmpty: { msg: "O andar não pode ser vazio!" }
        }
      },
      sala: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "O sala não pode ser nulo!" },
          notEmpty: { msg: "O sala não pode ser vazio!" }
        }
      },
      descricao: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "A descrição não pode ser nula!" },
          notEmpty: { msg: "A descrição não pode ser vazia!" }
        }
      },
      qr: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "O QR não pode ser nulo!" },
          notEmpty: { msg: "O QR não pode ser vazio!" }
        }
      }
    }, { sequelize, modelName: 'local', tableName: 'locais' }
    )
  }

  static associate(models) {
  }

}

export { Local };