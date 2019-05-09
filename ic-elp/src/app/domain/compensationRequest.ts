import { User } from "./user";

export class CompensationRequest {
    id?;
    user?;
    numberOfHours;
    startDate: Date;
    endDate?;
    status?;
    description;

    constructor(startDate: Date, numberOfHours: number, description: string, user?: User, endDate?: Date, status?: string) {
      this.user = user;
      this.numberOfHours = numberOfHours;
      this.startDate = startDate;
      this.endDate = endDate;
      this.status = status;
      this.description = description;
    }
  }
