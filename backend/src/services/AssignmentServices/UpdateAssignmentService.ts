import { Response } from "express";
import { assignmentRepository } from "../../repositories/assignmentRepository";

export class UpdateAssignmentService {
    async execute(
        id: string, 
        res: Response, 
        title: string, 
        description: string, 
        start: string, 
        end: string
    ){
        try {
            const assignmentToUpdate = await assignmentRepository.findOneBy({ id });

            if(!assignmentToUpdate){
                return res.status(400).json({message:"Não foi encontrada nenhuma tarefa"});
            }

            assignmentToUpdate.title = title ? title : assignmentToUpdate.title;
            assignmentToUpdate.description = description ? description : assignmentToUpdate.description;
            assignmentToUpdate.start = start ? start : assignmentToUpdate.start;
            assignmentToUpdate.end = end ? end : assignmentToUpdate.end;

            await assignmentRepository.save(assignmentToUpdate);

            return res.json({message:`Tarefa ${assignmentToUpdate.title} foi atualizada com sucesso`});
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: "Internal Server Error!"})
        }
    }
}