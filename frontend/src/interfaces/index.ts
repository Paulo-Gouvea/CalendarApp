export interface AssignmentContextData {
    assignments: Assignemnt[];
}

export interface Assignemnt {
    id: string;
    title: string;
    description: string;
    start: Date;
    end: Date;
}