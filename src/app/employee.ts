import { Project } from "./project";

export class Employee {
    id: number;
    name: string;
    role: string;
    registration: string;
    email: string;
    project: Project;

    constructor() {
        this.project = new Project();
    }
}