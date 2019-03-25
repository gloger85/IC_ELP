import { Employee } from "../employee";
import { Leave } from "./leave";

export class PaternityLeave extends Leave {
    constructor(employee: Employee, leaveId?: number) {
        super(employee, leaveId);
    }
}