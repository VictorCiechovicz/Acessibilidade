import Sequelize from 'sequelize';

import { databaseConfig } from './database-config.js';

import { Local } from '../models/Local.js';
import { Predio } from '../models/Predio.js';
import { Sala } from '../models/Sala.js';

import * as fs from 'fs';

const sequelize = new Sequelize(databaseConfig);

//Inicia Tabelas
Local.init(sequelize);
Predio.init(sequelize);
Sala.init(sequelize);

//Associar em ordem 
Local.associate(sequelize.models);
Predio.associate(sequelize.models);
Sala.associate(sequelize.models);

//Para para de criar automatico
//databaseInserts();

function databaseInserts() {
    (async () => {

        await sequelize.sync({ force: true });

        //const Local1 = await Local.create({ local: "Panambi", mensagem1: " Teste 123 Teste", mensagem2: "", audio: "Teste",qr: "QR" });
        //const Local1 = await Local.create({ local: "Panambi", endereco: "Rua A", mensagem1: " Teste 123 Teste", mensagem2: "", audio: "Teste",qr: "QR" });
    })();
}

export default sequelize;