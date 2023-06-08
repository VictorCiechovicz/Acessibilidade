import { PredioService } from  '../services/PredioService.js';

class PredioController {
  
  static async findAll(req, res, next) {
    PredioService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  }

  static async findByPk(req, res, next) {
    PredioService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async create(req, res, next) {
    PredioService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async update(req, res, next) {
    PredioService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async delete(req, res, next) {
    PredioService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

}

export {PredioController};