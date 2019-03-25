import { Employee } from "../employee";
import { Leave } from "./leave";

export class PaidExcusedAbsence extends Leave{
    leaveReason: string;

    constructor(employee: Employee, leaveId?: number) {
        super(employee, leaveId);
    }
}