import { Response } from "express";
import { assignmentRepository } from "../../repositories/assignmentRepository";

export class GetAllAssignmentsService {
    async execute(res: Response){
        try {
            const assignments = await assignmentRepository.find();

            return res.json(assignments);
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: "Internal Server Error!"})
        }
    }
}