import { AppDataSource } from "../data-source";
import { Assignment } from "../entities/Assignment";

export const assignmentRepository = AppDataSource.getRepository(Assignment)