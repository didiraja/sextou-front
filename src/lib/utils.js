import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function readableDate(dateString) {
  return format(new Date(dateString), "iii',' dd 'de' MMMM", { locale: ptBR });
}