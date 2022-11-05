import { Response } from "express";
import { assignmentRepository } from "../../repositories/assignmentRepository";

export class GetOneAssignmentService {
    async execute(id: string, res: Response){
        try {
            const assignmentToRead = await assignmentRepository.findOneBy({ id });

            if(!assignmentToRead){
                return res.status(400).json({message:"Não foi encontrada nenhuma tarefa"});
            }

            return res.json(assignmentToRead);
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: "Internal Server Error!"})
        }
    }
}