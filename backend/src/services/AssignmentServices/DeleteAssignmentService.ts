import { Response } from "express";
import { assignmentRepository } from "../../repositories/assignmentRepository";

export class DeleteAssignmentService {
    async execute(id: string, res: Response){
        try {
            const assignmentToRemove = await assignmentRepository.findOneBy({ id });

            if(!assignmentToRemove){
                return res.status(400).json({message:"Não foi encontrada nenhuma tarefa"});
            }

            await assignmentRepository.remove(assignmentToRemove);

            return res.json({message:`Tarefa ${assignmentToRemove.title} foi deletada com sucesso`})
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: "Internal Server Error!"})
        }
    }
}