// @ts-nocheck
import { format, startOfWeek, nextFriday, nextSunday } from "date-fns";
import { ptBR } from "date-fns/locale";

class DateClass {
  /**
   * Basic and Common elements to the Class
   *
   * @constructor
   * @const {Date} today - Today's Date
   * @const {Date} week - First day of Week
   */
  constructor() {
    // To prevent bugs on Safari, keep creation from browser's API
    this.today = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    );

    this.week = startOfWeek(this.today);
  }

  /**
   * Today's date output
   *
   * @return {string} date formatted to ISO, on GMT time
   */
  todayDate(): string {
    return this.today.toISOString();
  }

  /**
   * Date formatted showing day of week, and month by name
   *
   * @example Terça, 31 de Janeiro
   * @return {string}
   */
  readableDate(date: string): string {
    const formatted = format(new Date(date), "iii',' dd 'de' MMMM", {
      locale: ptBR,
    });

    return formatted;
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
