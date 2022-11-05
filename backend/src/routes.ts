import { Router } from "express";
import { AssignmentController } from "./controllers/AssignmentController";

const routes = Router();

routes.post('/assignment', new AssignmentController().create)
routes.get('/assignment', new AssignmentController().readAll)
routes.get('/assignment/:id', new AssignmentController().readOne)
routes.put('/assignment/:id', new AssignmentController().update)
routes.delete('/assignment/:id', new AssignmentController().delete)

export default routes;