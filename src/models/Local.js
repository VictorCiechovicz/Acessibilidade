import { Model, DataTypes } from 'sequelize';

class Local extends Model {

  static init(sequelize) {
    super.init({
      local: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "O Local não pode ser nulo!" },
          notEmpty: { msg: "O Local não pode ser vazio!" },
        }
      },
      mensagem1: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: { msg: "A Mensagem não pode ser nula!" },
          notEmpty: { msg: "A Mensagem não pode ser vazia!" }
        }
      },
      mensagem2: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          
        }
      },
      audio: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "O Audio não pode ser nulo!" },
          notEmpty: { msg: "O Audio não pode ser vazio!" }
        }
      },
      imagem: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "O Imagem não pode ser nula!" },
          notEmpty: { msg: "O Imagem não pode ser vazia!" }
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