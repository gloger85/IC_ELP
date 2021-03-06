import { Injectable } from '@angular/core';
import { RequestType, Occassion, DeathOf } from 'src/app/domain/enums/request-enums';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  constructor() {}

  CountNumberOfWorkingDays(
    rangeDates: Date[],
    invalidDates: Date[],
    invalidDays: number[]
  ): number {
    if (!rangeDates || !rangeDates[1]) {
      return 1;
    }

    let workingDaysCount = 0;
    const startDate: Date = rangeDates[0];
    const endDate: Date = rangeDates[1];
    const date: Date = new Date(startDate);

    while (date <= endDate) {
      if (
        !(
          this.IsInvalidDate(invalidDates, date) ||
          this.IsInvalidDay(invalidDays, date)
        )
      ) {
        workingDaysCount++;
      }
      date.setDate(date.getDate() + 1);
    }
    return workingDaysCount;
  }

  GetPublicHolidaysByYear(year: number): Array<Date> {
    const publicHolidays: Array<Date> = [
      new Date(year, 0, 1), // Nowy Rok
      new Date(year, 0, 6), // Trzech Króli
      new Date(year, 4, 1), // Święto Pracy
      new Date(year, 4, 3), // Święto Konstytucji 3 Maja
      new Date(year, 7, 15), // Wniebowzięcie Najświętszej Maryi Panny
      new Date(year, 10, 1), // Wszystkich Świętych
      new Date(year, 10, 11), // Święto Niepodległości
      new Date(year, 11, 25), // Boże Narodzenie
      new Date(year, 11, 26) // Boże Narodzenie
    ];

    // Obliczanie Wielkanocy
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const p = (h + l - 7 * m + 114) % 31;
    const easterDay = p + 1;
    let easterMonth = Math.floor((h + l - 7 * m + 114) / 31);

    easterMonth--; // W JavaScript miesiące zaczynają się od 0

    const wielkanoc = new Date(year, easterMonth, easterDay);
    const wielkanocnyPoniedzialek = new Date(year, easterMonth, easterDay + 1);
    const zeslanieDuchaSwietego = new Date(year, easterMonth, easterDay + 49);
    const bozeCialo = new Date(year, easterMonth, easterDay + 60);

    publicHolidays.push(wielkanoc);
    publicHolidays.push(wielkanocnyPoniedzialek);
    publicHolidays.push(zeslanieDuchaSwietego);
    publicHolidays.push(bozeCialo);

    return publicHolidays;
  }

  IsInvalidDate(invalidDates: Date[], date: Date): boolean {
    return invalidDates.some(d => {
      return d.toDateString() === date.toDateString();
    });
  }

  IsInvalidDay(invalidDays: number[], date: Date) {
    return invalidDays.includes(date.getDay());
  }

  GetNoOfDaysByReqType(
    requestType: string,
    occassion?: string,
    deathOf?: string
  ): number {
    if (requestType === RequestType.onDemandLeave) {
      return 4;
    }
    if (requestType === RequestType.childCare) {
      return 2;
    }

    switch (occassion) {
      case Occassion.childBirth:
      case Occassion.employeesWedding:
        return 2;

      case Occassion.emploeesChildWedding:
        return 1;
    }

    switch (deathOf) {
      case DeathOf.child:
      case DeathOf.father:
      case DeathOf.mother:
      case DeathOf.spouse:
      case DeathOf.stepfather:
      case DeathOf.stepmother:
        return 2;

      case DeathOf.brother:
      case DeathOf.fatherInLaw:
      case DeathOf.grandfather:
      case DeathOf.grandmother:
      case DeathOf.motherInLaw:
      case DeathOf.other:
      case DeathOf.sister:
        return 1;
    }

    return 366;
  }
}
