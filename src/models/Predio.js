import { Model, DataTypes } from 'sequelize';

class Predio extends Model {

  static init(sequelize) {
    super.init({
      predio: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "O Local não pode ser nulo!" },
          notEmpty: { msg: "O Local não pode ser vazio!" },
        }
      },
      menssagem1: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "A Mensagem não pode ser nula!" },
          notEmpty: { msg: "A Mensagem não pode ser vazia!" }
        }
      },
      menssagem2: {
        type: DataTypes.STRING,
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
      qr: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "O QR não pode ser nulo!" },
          notEmpty: { msg: "O QR não pode ser vazio!" }
        }
      }
    }, { sequelize, modelName: 'predio', tableName: 'predios' }
    )
  }

  static associate(models) {
    this.belongsTo(models.local, {as: 'local', foreignKey: {name: 'localId' , allowNull: false, validate: {notNull: {msg: 'Local do Prédio deve ser preenchido!'}}}});
  }
}

export { Predio };