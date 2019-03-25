import { Leave } from "../leave";
import { Employee } from "../../employee";

export class SuperbisedLeave extends Leave {
    constructor(employee: Employee, leaveId?: number) {
        super(employee, leaveId);
    }
}