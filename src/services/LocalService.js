import { Local } from '../models/Local.js';

class LocalService {

  static async findAll() {
    const objs = await Local.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Local.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  }

  static async create(req) {
    const { sigla, nome } = req.body;
    const obj = await Local.create({ sigla, nome });
    return await Usuario.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async update(req) {
    const { id } = req.params;
    const { local , menssagem1, menssagem2, audio, qr } = req.body;
    const obj = await Local.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Local não encontrado!';
    Object.assign(obj, { local , menssagem1, menssagem2, audio, qr });
    return await obj.save();
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Local.findByPk(id);
    if (obj == null) throw 'Local não encontrado!';
    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Não é possível remover um Local que está sendo utilizado!";
    }
  }

}

export {LocalService};