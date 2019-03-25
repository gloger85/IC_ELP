import { Leave } from "./leave";
import { Employee } from "../employee";

export class LeaveOnDemand extends Leave {
    constructor(employee: Employee, leaveId?: number) {
        super(employee, leaveId);
    }
}