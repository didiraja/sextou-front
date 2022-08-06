const mockCoverLink = 'http://placeimg.com/320/240/any';

const highlightMock = [
	{
		Title: 'Lorem Ipsum',
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
			url: mockCoverLink
		}
	},
	{
		Title: 'Lorem Ipsum II',
		Date: '2022-06-15T22:00:00.000Z',
		Description: 'Digite aqui a descrição do seu evento. Aceita Rich Text.',
		Ticket: 'Link de compra de ingressos do seu evento',
		Zone: {
			Title: 'Zona Oeste'
		},
		Neighborhood: {
			Name: 'Barra'
		},
		Cover: {
			url: mockCoverLink
		}
	},
	{
		Title: 'Lorem Ipsum III',
		Date: '2022-06-22T22:00:00.000Z',
		Description: 'Digite aqui a descrição do seu evento. Aceita Rich Text.',
		Ticket: 'Link de compra de ingressos do seu evento',
		Zone: {
			Title: 'Zona Sul'
		},
		Neighborhood: {
			Name: 'Botafogo'
		},
		Cover: {
			url: mockCoverLink
		}
	}
];

const eventsMock = [
	{
		Title: 'Lorem Ipsum dolor',
		Date: '2022-09-11T22:00:00.000Z',
		Description: 'Digite aqui a descrição do seu evento. Aceita Rich Text.',
		Ticket: 'Link de compra de ingressos do seu evento',
		Zone: {
			Title: 'Zona Norte'
		},
		Neighborhood: {
			Name: 'Méier'
		},
		Cover: {
			url: mockCoverLink
		}
	},
	{
		Title: 'Lorem Ipsum daleste',
		Date: '2022-09-15T22:00:00.000Z',
		Description: 'Digite aqui a descrição do seu evento. Aceita Rich Text.',
		Ticket: 'Link de compra de ingressos do seu evento',
		Zone: {
			Title: 'Baixada'
		},
		Neighborhood: {
			Name: 'Duque de Caxias'
		},
		Cover: {
			url: mockCoverLink
		}
	},
	{
		Title: 'Lorem Ipsum doluey',
		Date: '2022-09-22T22:00:00.000Z',
		Description: 'Digite aqui a descrição do seu evento. Aceita Rich Text.',
		Ticket: 'Link de compra de ingressos do seu evento',
		Zone: {
			Title: 'Zona Sul'
		},
		Neighborhood: {
			Name: 'Copacabana'
		},
		Cover: {
			url: mockCoverLink
		}
	}
];

export const HIGHLIGHT_MOCK = highlightMock;

export const EVENTS_MOCK = [...highlightMock, ...eventsMock];

export const MODAL_MOCK = {
	...EVENTS_MOCK[0],
	Title: 'Modalorem Ipsum',
	Date: '2022-11-05T22:00:00.000Z',
	// Description: 'Digite aqui a descrição do seu evento. Aceita Rich Text.',
	// Ticket: 'Link de compra de ingressos do seu evento',
	// Zone: {
	// 	Title: 'Centro'
	// },
	// Neighborhood: {
	// 	Name: 'Lapa'
	// },
	Cover: {
		url: 'http://placeimg.com/320/240/any'
	}
};
