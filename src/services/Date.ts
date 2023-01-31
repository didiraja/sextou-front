// @ts-nocheck
import { format, startOfWeek, nextFriday, nextSunday } from "date-fns";
import { ptBR } from "date-fns/locale";

class DateClass {
  constructor() {
    // browser's way to create a Today's date from 00h
    this.today = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    );
    this.week = startOfWeek(this.today);
  }

  todayDate() {
    return this.today.toISOString();
  }

  readableDate(date: string): string {
    const formatted = format(new Date(date), "iii',' dd 'de' MMMM", {
      locale: ptBR,
    });

    return formatted;
  }

  workingWeekStart() {
    return nextFriday(this.week);
  }

  formattedWeekStart() {
    return this.readableDate(this.workingWeekStart());
  }

  workingWeekEnd() {
    return nextSunday(this.week);
  }

  formattedWeekEnd() {
    return this.readableDate(this.workingWeekEnd());
  }
}

export default new DateClass();
