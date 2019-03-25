import { Leave } from "./leave";
import { Employee } from "../employee";
import { Occasion } from "./occasion";

export class OccasionalLeave extends Leave {
    occasion: Occasion;
    additionalInformation: string;

    constructor(employee: Employee, leaveId?: number) {
        super(employee, leaveId);
    }
}