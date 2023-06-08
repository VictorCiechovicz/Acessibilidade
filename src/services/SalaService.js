import { Sala } from '../models/Sala.js';

class SalaService {

  static async findAll() {
    const objs = await Local.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Sala.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  }

  static async create(req) {
    const { sala , menssagem1, menssagem2, audio, qr  } = req.body;
    const obj = await Sala.create({ sala , menssagem1, menssagem2, audio, qr });
    return await Sala.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async update(req) {
    const { id } = req.params;
    const { sigla, nome } = req.body;
    const obj = await Sala.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Sala não encontrada!';
    Object.assign(obj, { sigla, nome });
    return await obj.save();
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Sala.findByPk(id);
    if (obj == null) throw 'Sala não encontrada!';
    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Não é possível remover uma Sala que está sendo utilizada!";
    }
  }

}

export {SalaService};