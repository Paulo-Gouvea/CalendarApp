import { Response } from "express";
import { assignmentRepository } from "../../repositories/assignmentRepository";

export class CreateAssignmentService {
    async execute(
        res: Response, 
        title: string, 
        description: string, 
        schedule: string, 
        duration: string
    ){
        try {
            const newAssignment = assignmentRepository.create({
                title,
                description,
                schedule,
                duration,
            });

            await assignmentRepository.save(newAssignment);

            return res.status(201).json(`Tarefa ${newAssignment.title} criada com sucesso`);
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: "Internal Server Error!"})
        }
    }
}