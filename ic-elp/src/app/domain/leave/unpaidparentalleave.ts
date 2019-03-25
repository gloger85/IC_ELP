import { Leave } from "./leave";
import { Employee } from "../employee";

export class UnpaidParentalLeave extends Leave {
    constructor(employee: Employee, leaveId?: number) {
        super(employee, leaveId);
    }
}