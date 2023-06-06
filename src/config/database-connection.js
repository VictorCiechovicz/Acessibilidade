import Sequelize from 'sequelize';

import { databaseConfig } from './database-config.js';

import { Local } from '../models/Local.js';

import * as fs from 'fs';

const sequelize = new Sequelize(databaseConfig);

//Inicia Tabelas
Local.init(sequelize);

//Associar em ordem 
Local.associate(sequelize.models);

databaseInserts(); 

function databaseInserts() {
    (async () => {

        await sequelize.sync({ force: true }); 

        const Local1 = await Local.create({ id_empresa: 1, nome_sabor: "1", valor: 1.00, id_imagem: 1, descricao: "teste 01", status: true, id_categoria: 1});
        const Local2 = await Local.create({ id_empresa: 1, nome_sabor: "2", valor: 2.00, id_imagem: 2, descricao: "teste 02", status: false, id_categoria: 2});
        const Local3 = await Local.create({ id_empresa: 1, nome_sabor: "3", valor: 2.00, id_imagem: 2, descricao: "teste 02", status: false, id_categoria: 2});

    })();
}

export default sequelize;