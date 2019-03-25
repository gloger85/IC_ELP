import { Employee } from "../employee";
import { Leave } from "./leave";

export class MaternityLeave extends Leave{
    constructor(employee: Employee, leaveId?: number) {
        super(employee, leaveId);
    }
}