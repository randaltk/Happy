
import { Router } from 'express';
import multer from "multer";

import uploadConfig from './src/config/upload'
import OrphanagesController from './src/controllers/OrphanagesController'


const routes = Router();
const upload = multer(uploadConfig)

// index, show,create,update,delete

routes.get("/orphanages", OrphanagesController.index)
routes.get("/orphanages/:id", OrphanagesController.show)
routes.post("/orphanages", upload.array('images'), OrphanagesController.create)

export default routes;