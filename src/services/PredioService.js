import { Predio } from '../models/Predio.js';

class PredioService {

  static async findAll() {
    const objs = await Predio.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Predio.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  }

  static async create(req) {
    const { sigla, nome } = req.body;
    const obj = await Predio.create({ sigla, nome });
    return await Predio.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async update(req) {
    const { id } = req.params;
    const { predio , menssagem1, menssagem2, audio, qr } = req.body;
    const obj = await Predio.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Prédio não encontrado!';
    Object.assign(obj, { predio , menssagem1, menssagem2, audio, qr });
    return await obj.save();
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Predio.findByPk(id);
    if (obj == null) throw 'Prédio não encontrado!';
    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Não é possível remover o Prédio que está sendo utilizado!";
    }
  }

}

export {PredioService};