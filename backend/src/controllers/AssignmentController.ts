import { Request, Response } from "express";
import { assignmentRepository } from "../repositories/assignmentRepository";

export class AssignmentController {
    async create(req: Request, res: Response){
        const { title, description, duration } = req.body;

        if (!title || !description || !duration) {
            return res.status(400).json({message: "Uma das informações não foi passada"});
        }

        try {
            const newAssignment = assignmentRepository.create({
                title,
                description,
                duration,
            });

            await assignmentRepository.save(newAssignment);

            return res.status(201).json(`Tarefa ${newAssignment.title} criada com sucesso`);
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: "Internal Server Error!"})
        }
    }

    async read(req: Request, res: Response){
        try {
            const assignments = await assignmentRepository.find();

            return res.json(assignments);
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: "Internal Server Error!"})
        }
    }

    async update(req: Request, res: Response){
        const { id } = req.params;
        const { title, description, duration } = req.body;

        try {
            const assignmentToUpdate = await assignmentRepository.findOneBy({ id });

            if(!assignmentToUpdate){
                return res.status(400).json({message:"Não foi encontrada nenhuma tarefa"});
            }

            assignmentToUpdate.title = title ? title : assignmentToUpdate.title;
            assignmentToUpdate.description = description ? description : assignmentToUpdate.description;
            assignmentToUpdate.duration = duration ? duration : assignmentToUpdate.duration;

            await assignmentRepository.save(assignmentToUpdate);

            return res.json({message:`Tarefa ${assignmentToUpdate.title} foi atualizada com sucesso`});
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: "Internal Server Error!"})
        }
    }

    async delete(req: Request, res: Response){
        const { id } = req.params;

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