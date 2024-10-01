import {
  endOfMonth,
  format,
  formatISO,
  nextFriday,
  nextSunday,
  parseISO,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';

class DateClass {
  private today: Date;
  private week: Date;

  /**
   * Basic and Common elements to the Class
   *
   * @warning ALWAYS parse date to parseISO() to keep a pattern and prevent bugs in Safari < v15.x.x
   *
   * @constructor
   * @const {Date} today - Today's Date
   * @const {Date} week - First day of Week
   */
  constructor() {
    this.today = startOfToday();
    this.week = startOfWeek(this.today);
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

  /**
   * Numerical day of Next Friday, first day of Weekend
   *
   * @return {string} date formatted to ISO, on GMT time
   */
  weekendStart(): string {
    return formatISO(nextFriday(this.week));
  }

  /**
   * Numerical day of Next Sunday, last day of Weekend
   *
   * @return {string} date formatted to ISO, on GMT time
   */
  weekendEnd(): string {
    return formatISO(nextSunday(this.week));
  }

  /**
   * First day of the Month
   *
   * @return {string} date formatted to ISO, on GMT time
   */
  startOfMonth(): string {
    return formatISO(startOfMonth(this.today));
  }

  /**
   * Last day of the Month
   *
   * @return {string} date formatted to ISO, on GMT time
   */
  endOfMonth(): string {
    return formatISO(endOfMonth(this.today));
  }

  // formattedWeekStart() {
  //   return this.readableDate(this.workingWeekStart());
  // }

  // formattedWeekEnd() {
  //   return this.readableDate(this.workingWeekEnd());
  // }
}

export default new DateClass();
