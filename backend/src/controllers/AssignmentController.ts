import { Request, Response } from "express";
import { ReqBody } from "../interfaces";
import { CreateAssignmentService } from "../services/AssignmentServices/CreateAssignmentService";
import { DeleteAssignmentService } from "../services/AssignmentServices/DeleteAssignmentService";
import { GetAllAssignmentsService } from "../services/AssignmentServices/GetAllAssignmentsService";
import { GetOneAssignmentService } from "../services/AssignmentServices/GetOneAssignmentService";
import { UpdateAssignmentService } from "../services/AssignmentServices/UpdateAssignmentService";

export class AssignmentController {
    async create(req: Request, res: Response){
        const { title, description, schedule, duration } = req.body as ReqBody;

        if (!title || !description || !schedule || !duration ) {
            return res.status(400).json({message: "Uma das informações não foi passada"});
        }

        const service = new CreateAssignmentService();

        const newAssignmentResponse = service.execute(res, title, description, schedule, duration);

        return newAssignmentResponse;
    }

    async readAll(req: Request, res: Response){
        const service = new GetAllAssignmentsService();

        const assignmentsResponse = service.execute(res);

        return assignmentsResponse;
    }

    async readOne(req: Request, res: Response){
        const { id } = req.params;

        const service = new GetOneAssignmentService();

        const assignemtResponse = service.execute(id, res);

        return assignemtResponse;
    }

    async update(req: Request, res: Response){
        const { id } = req.params;
        const { title, description, schedule, duration } = req.body as ReqBody;

        const service = new UpdateAssignmentService();

        const updatedAssignmentResponse = service.execute(id, res, title, description, schedule, duration);

        return updatedAssignmentResponse;
    }

    async delete(req: Request, res: Response){
        const { id } = req.params;

        const service = new DeleteAssignmentService();

        const deletedAssignmentResponse = service.execute(id, res);

        return deletedAssignmentResponse;
    }
}