import { Leave } from "./leave";
import { Employee } from "../employee";

export class UnpaidExcusedLeave extends Leave {
    leaveReason: string;

    constructor(employee: Employee, leaveId?: number) {
        super(employee, leaveId);
    }
}