import { Employee } from "./employee";
import { Equipment } from "./equipment";

export class Allocation {
    id: number;
    equipment: Equipment;
    employee: Employee;
    allocationDate: string;
    acceptationDate: string;
    returnDate: string;
    status: string;
    location: string;
    locationDate: string;

    constructor() {
        this.equipment = new Equipment();
        this.employee = new Employee();
    }
}
