import { Model, DataTypes } from 'sequelize';

class Sala extends Model {

  static init(sequelize) {
    super.init({
      sala: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "A Sala não pode ser nula!" },
          notEmpty: { msg: "A Sala não pode ser vazia!" },
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
    }, { sequelize, modelName: 'sala', tableName: 'salas' }
    )
  }

  static associate(models) {
    this.belongsTo(models.predio, {as: 'predio', foreignKey: {name: 'predioId' , allowNull: false, validate: {notNull: {msg: 'Prédio da Sala deve ser preenchido!'}}}});
    
  }

}

export { Sala };