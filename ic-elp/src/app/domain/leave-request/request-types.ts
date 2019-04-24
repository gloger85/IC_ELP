import { SelectItem } from 'primeng/api';
import { RequestType, Occassion, DeathOf } from '../enums/request-enums';

export class RequestTypes {

  _requestSelectItems: SelectItem[] = [
    { label: 'Select request type', value: null },
    {
      label: RequestType.personalLeave,
      value: { id: 1, name: RequestType.personalLeave }
    },
    {
      label: RequestType.onDemandLeave,
      value: { id: 2, name: RequestType.onDemandLeave }
    },
    {
      label: RequestType.occassionalLeave,
      value: { id: 3, name: RequestType.occassionalLeave }
    },
    {
      label: RequestType.excusedPaidAbsence,
      value: { id: 4, name: RequestType.excusedPaidAbsence }
    },
    {
      label: RequestType.excusedUnpaidAbsence,
      value: { id: 5, name: RequestType.excusedUnpaidAbsence }
    },
    {
      label: RequestType.unpaidLeave,
      value: { id: 6, name: RequestType.unpaidLeave }
    },
    {
      label: RequestType.childCare,
      value: { id: 7, name: RequestType.childCare }
    },
    {
      label: RequestType.maternityLeave,
      value: { id: 8, name: RequestType.maternityLeave }
    },
    {
      label: RequestType.parentalLeave,
      value: { id: 9, name: RequestType.parentalLeave }
    },
    {
      label: RequestType.paternityLeave,
      value: { id: 10, name: RequestType.paternityLeave }
    },
    {
      label: RequestType.unpaidChildcareLeave,
      value: { id: 11, name: RequestType.unpaidChildcareLeave }
    }
  ];

  _requestOccasions: SelectItem[] = [
    { label: 'Select occasion', value: null },
    {
      label: Occassion.employeesWedding,
      value: { id: 1, name: Occassion.employeesWedding }
    },
    {
      label: Occassion.emploeesChildWedding,
      value: { id: 2, name: Occassion.emploeesChildWedding }
    },
    { label: Occassion.death, value: { id: 3, name: Occassion.death } },
    {
      label: Occassion.childBirth,
      value: { id: 4, name: Occassion.childBirth }
    }
  ];

  _reqDegreesOfKinships: SelectItem[] = [
    { label: 'Select degree', value: null },
    { label: DeathOf.spouse, value: { id: 1, name: DeathOf.spouse } },
    { label: DeathOf.child, value: { id: 2, name: DeathOf.child } },
    { label: DeathOf.mother, value: { id: 3, name: DeathOf.mother } },
    { label: DeathOf.father, value: { id: 4, name: DeathOf.father } },
    {
      label: DeathOf.fatherInLaw,
      value: { id: 5, name: DeathOf.fatherInLaw }
    },
    {
      label: DeathOf.motherInLaw,
      value: { id: 6, name: DeathOf.motherInLaw }
    },
    {
      label: DeathOf.grandfather,
      value: { id: 7, name: DeathOf.grandfather }
    },
    {
      label: DeathOf.grandmother,
      value: { id: 8, name: DeathOf.grandmother }
    },
    { label: DeathOf.stepfather, value: { id: 9, name: DeathOf.stepfather } },
    {
      label: DeathOf.stepmother,
      value: { id: 10, name: DeathOf.stepmother }
    },
    { label: DeathOf.sister, value: { id: 11, name: DeathOf.sister } },
    { label: DeathOf.brother, value: { id: 12, name: DeathOf.brother } },
    { label: DeathOf.other, value: { id: 13, name: DeathOf.other } }
  ];

  _reqDaysOrHoursOptions: SelectItem[] = [
    { label: 'Select days or hours', value: null },
    { label: 'Days', value: { id: 1, name: 'Days' } },
    { label: 'Hours', value: { id: 2, name: 'Hours' } }
  ];

  constructor() {
  }

  public GetReqSelectIts(): SelectItem[] {
    return this._requestSelectItems;
  }

  public GetReqOccasions(): SelectItem[] {
    return this._requestOccasions;
  }

  public GetReqDegreeOfKinships(): SelectItem[] {
    return this._reqDegreesOfKinships;
  }

  public GetDaysOrHoursOptions(): SelectItem[] {
    return this._reqDaysOrHoursOptions;
  }
}
