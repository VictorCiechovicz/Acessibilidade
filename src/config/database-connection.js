import Sequelize from 'sequelize';

import { databaseConfig } from './database-config.js';

import { Local } from '../models/Local.js';

import * as fs from 'fs';

const sequelize = new Sequelize(databaseConfig);

//Inicia Tabelas
Local.init(sequelize);

//Associar em ordem 
Local.associate(sequelize.models);

//Para para de criar automatico
databaseInserts();

function databaseInserts() {
    (async () => {

        await sequelize.sync({ force: true });

        const Local1 = await Local.create({ predio: "A", andar: "1", sala: "12", descricao: "sala  12", qr: "TESTE" });
        const Local2 = await Local.create({ predio: "A", andar: "1", sala: "12", descricao: "sala  12", qr: "TESTE" });
        const Local3 = await Local.create({ predio: "A", andar: "1", sala: "12", descricao: "sala  12", qr: "TESTE" });
        const Local4 = await Local.create({ predio: "A", andar: "1", sala: "12", descricao: "sala  12", qr: "TESTE" });

    })();
}

export default sequelize;