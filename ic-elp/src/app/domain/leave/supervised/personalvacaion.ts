import { SuperbisedLeave } from "./supervised";
import { Employee } from "../../employee";

export class PersonalVacation extends SuperbisedLeave {
    constructor(employee: Employee, leaveId?: number) {
        super(employee, leaveId);
    }
}