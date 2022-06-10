import { format, isFriday,
  isSaturday,
  isSunday,
  previousFriday,
  nextFriday,
  nextSunday } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function readableDate(dateString) {
  return format(new Date(dateString), "iii',' dd 'de' MMMM", { locale: ptBR });
}

export function getWeekendDates() {

  // pay attention: output ALWAYS one day less
  const date = new Date(/*'2022-06-14'*/);

	if (isFriday(date)) {
    // console.log('is Friday!');
		return {
      weekendStart: date,
      weekendEnd: nextSunday(date)
    };
	}
  
	if (isSaturday(date)) {
    // console.log('is Saturday!');
		return {
      weekendStart: previousFriday(date),
      weekendEnd: nextSunday(date)
    };
	}
  
	if (isSunday(date)) {
    // console.log('is Sunday!');
		return {
      weekendStart: previousFriday(date),
      weekendEnd: date
    };
	}
  
  // console.log('Not weekend');
  return {
    weekendStart: nextFriday(date),
    weekendEnd: nextSunday(date)
  };

};