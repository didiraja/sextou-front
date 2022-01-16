import { writable } from 'svelte/store';

export const EventDetailsStore = writable({
  // DEBUG ONLY
  "eventCover": "http://localhost:1337/uploads/fbc_card_cda1586686.jpg",
  "eventTitle": "FBC - Lançamento do CD 'Baile'",
  "eventDate": "2022-01-26T01:00:00.000Z",
  "eventZone": {
      "id": 3,
      "Title": "Centro",
      "Description": "Descrição da sua categoria",
      "created_at": "2021-11-16T02:54:46.905Z",
      "updated_at": "2022-01-16T02:17:30.936Z",
      "Name": "Centro"
  },
  "eventNeighborhood": {
      "id": 3,
      "Zone": 3,
      "Name": "Lapa",
      "created_at": "2021-11-16T02:56:33.566Z",
      "updated_at": "2022-01-16T02:17:30.916Z"
  },
  "eventDescription": "Digite aqui a descrição do seu evento. Aceita Rich Text,"
});