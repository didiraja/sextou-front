// @ts-nocheck
import {
  format,
  startOfToday,
  startOfWeek,
  formatISO,
  parseISO,
} from "date-fns";
import { ptBR } from "date-fns/locale";

class DateClass {
  private today: Date;
  // private week: Date;

  /**
   * Basic and Common elements to the Class
   *
   * @warning ALWAYS parse date to parseISO() to keep a pattern and prevent bugs in Safari < v15.x.x
   *
   * @constructor
   * @const {Date} today - Today's Date
  //  * @const {Date} week - First day of Week
   */
  constructor() {
    this.today = startOfToday();

    // this.week = startOfWeek(this.today);
  }

  /**
   * Today's date output
   *
   * @return {string} date formatted to ISO, on GMT time
   */
  todayDate(): string {
    return formatISO(this.today);
  }

  /**
   * Date formatted showing day of week, and month by name
   *
   * @example Terça, 31 de Janeiro
   * @return {string}
   */
  readableDate(date: string): string {
    const weekAndMonthDay = format(parseISO(date), "iii',' dd 'de' MMMM", {
      locale: ptBR,
    });

    return weekAndMonthDay;
  }

  // workingWeekStart() {
  //   return nextFriday(this.week);
  // }

  // formattedWeekStart() {
  //   return this.readableDate(this.workingWeekStart());
  // }

  // workingWeekEnd() {
  //   return nextSunday(this.week);
  // }

  // formattedWeekEnd() {
  //   return this.readableDate(this.workingWeekEnd());
  // }
}

export default new DateClass();
