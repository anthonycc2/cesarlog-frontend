import { Employee } from './employee';

export class Account {
    id: number;
    login: string;
    password: string;
    level: string;
    employee: Employee;

    constructor() {
        this.employee = new Employee();
    }
}