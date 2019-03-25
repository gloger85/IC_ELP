import { Leave } from "./leave";
import { Employee } from "../employee";

export class Childcare extends Leave {
    totalWorkhours: number;

    constructor(employee: Employee, leaveId?: number) {
        super(employee, leaveId);
    }
}