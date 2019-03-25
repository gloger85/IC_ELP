import { Employee } from "../employee";
import { LeaveStatus } from "./leave-status";

export class Leave {
    id: number;
    leaveId: number;
    creationTime: Date = new Date();
    submissionDate: Date;
    revisionDate: Date;

    requestor: Employee;

    startDate: Date;
    endDate: Date;

    totalWorkdays: number;
    leaveStatus: LeaveStatus;

    decisionReason: string;

    decisionBy: Employee;

    constructor(employee: Employee, leaveId?: number) {
        this.requestor = employee;
        this.leaveId = leaveId;
    }
   
}