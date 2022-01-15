import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDate(dateObj) {

  // TO DO: if not a date
  // 2022-02-01T23:30:00.000Z

  return format(new Date(dateObj), "iii',' dd 'de' MMMM", { locale: ptBR });
}