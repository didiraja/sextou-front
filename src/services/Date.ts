// @ts-nocheck
import {
  format,
  startOfToday,
  startOfWeek,
  nextFriday,
  nextSunday,
  formatISO,
} from "date-fns";
import { ptBR } from "date-fns/locale";

class DateClass {
  constructor() {
    this.today = startOfToday();
    this.week = startOfWeek(this.today);
  }

  todayDate() {
    return formatISO(this.today);
  }

  readableDate(date: string): string {
    return format(new Date(date), "iii',' dd 'de' MMMM", { locale: ptBR });
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
