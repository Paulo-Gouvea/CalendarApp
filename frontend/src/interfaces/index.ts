import { UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export interface AssignmentContextData {
    assignments: Assignemnt[];
    addAssignment: UseMutationResult<AxiosResponse<any, any>, unknown, Assignemnt, unknown>
}

export interface Assignemnt {
    id?: string;
    title: string;
    description: string;
    start: Date;
    end: Date;
}