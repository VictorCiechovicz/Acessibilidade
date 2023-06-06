import { Model, DataTypes } from 'sequelize';

class Local extends Model {

  static init(sequelize) {
    super.init({
      id_empresa: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "O ID não pode ser nula!" },
          notEmpty: { msg: "O ID não pode ser vazia!" },
        }
      },
      nome_sabor: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "O nome não pode ser nulo!" },
          notEmpty: { msg: "O nome não pode ser vazio!" }
        }
      },
      valor: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          notNull: { msg: "O valor não pode ser nulo!" },
          notEmpty: { msg: "O valor não pode ser vazio!" }
        }
      },
      id_imagem: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
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
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
        }
      },
      id_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
        }
      }
    }, { sequelize, modelName: 'local', tableName: 'locais' }
    )
  }

  static associate(models) {
  }

}

export { Local };