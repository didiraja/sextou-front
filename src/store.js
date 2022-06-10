import { writable } from 'svelte/store';

export const eventDetails = writable({
  Title: 'Chá da Sonza no Vivo Rio',
  Date: '2022-06-11T22:00:00.000Z',
  Description: 'Digite aqui a descrição do seu evento. Aceita Rich Text.',
  Ticket: 'Link de compra de ingressos do seu evento',
  Zone: {
    Title: 'Centro'
  },
  Neighborhood: {
    Name: 'Lapa'
  },
  Cover: {
    formats: {
      small: {
        url: '/uploads/small_269764360_274422204569033_7496288547142186306_n_fbcd239024.jpg'
      }
    }
  }
});

export const searchResult = writable([]);