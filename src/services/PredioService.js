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
    const { predio , mensagem1, mensagem2, audio, imagem, qr } = req.body;
    const obj = await Predio.create({ predio , mensagem1, mensagem2, audio, imagem, qr });
    return await Predio.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async update(req) {
    const { id } = req.params;
    const { predio , mensagem1, mensagem2, audio, imagem, qr } = req.body;
    const obj = await Predio.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Prédio não encontrado!';
    Object.assign(obj, { predio , mensagem1, mensagem2, audio, imagem, qr });
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