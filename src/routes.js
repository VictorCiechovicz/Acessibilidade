import express from 'express';
import { LocalController } from './controllers/LocalController.js';
import { SalaController } from './controllers/SalaController.js';
import { PredioController } from './controllers/PredioController.js';

const routes = express.Router();

routes.get('/locais', LocalController.findAll);
routes.get('/locais/:id', LocalController.findByPk);
routes.post('/locais', LocalController.create);
routes.put('/locais/:id', LocalController.update);
routes.delete('/locais/:id', LocalController.delete);

routes.get('/salas', SalaController.findAll);
routes.get('/salas/:id', SalaController.findByPk);
routes.post('/salas', SalaController.create);
routes.put('/salas/:id', SalaController.update);
routes.delete('/salas/:id', SalaController.delete);

routes.get('/predios', PredioController.findAll);
routes.get('/predios/:id', PredioController.findByPk);
routes.post('/predios', PredioController.create);
routes.put('/predios/:id', PredioController.update);
routes.delete('/predios/:id', PredioController.delete);

export default routes;