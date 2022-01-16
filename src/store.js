import { writable } from 'svelte/store';

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
};

const day = Math.floor(getRandomArbitrary(1,31));
const month = Math.floor(getRandomArbitrary(0,11));

const date = new Date(2021, month, day)

export const EventDetailsStore = writable({
  eventCover: '',
  eventTitle: 'BK no Circo Voador',
  eventDate: `${date.getDay()+1} de ${date.toLocaleString('pt-BR', { month: 'long' })}`,
  eventPlace: ['Centro','Lapa'],
  eventTicket: `https://ticket.com/${getRandomArbitrary(1565,6858)}/`,
  eventDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque ex volutpat dapibus interdum. Suspendisse quis mollis ligula, in egestas urna. Sed tincidunt scelerisque metus et varius. Donec congue felis id magna molestie dapibus. Nam laoreet, metus in consequat sagittis, neque ex lobortis tellus, sed posuere lectus metus et nibh.',
});