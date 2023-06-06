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
    const { sigla, nome } = req.body;
    const obj = await Local.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Usuário não encontrado!';
    Object.assign(obj, { sigla, nome });
    return await obj.save();
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Local.findByPk(id);
    if (obj == null) throw 'Usuário não encontrado!';
    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Não é possível remover um Usuário que está sendo utilizado!";
    }
  }

}

export {LocalService};