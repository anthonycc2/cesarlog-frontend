import { Equipment } from './equipment';
import { Employee } from './employee';

export class EquipmentAssignment {
    id: number;
    equipment: Equipment;
    employee: Employee;
	assignmentDate: string;
	location: string;
	locationDate: string;
	status: string;

    constructor() {
        this.equipment = new Equipment();
        this.employee = new Employee();
    }
    
}
