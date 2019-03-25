import { SuperbisedLeave } from "./supervised";
import { Employee } from "../../employee";

export class UnpaidSupervisedLeave extends SuperbisedLeave{
    constructor(employee: Employee, leaveId?: number) {
        super(employee, leaveId);
    }
}