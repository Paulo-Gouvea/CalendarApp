import { Router } from "express";
import { AssignmentController } from "./controllers/AssignmentController";

const routes = Router();

routes.post('/assignment', new AssignmentController().create)
routes.get('/assignment', new AssignmentController().read)
routes.delete('/assignment/:id', new AssignmentController().delete)
routes.put('/assignment/:id', new AssignmentController().update)

export default routes;