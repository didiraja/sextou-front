/* default: 8 */
export const DEFAULT_ITEMS = 4;

export const Zones = Object.freeze([
	{
		id: 1,
		name: 'Zona Norte'
	},
	{
		id: 2,
		name: 'Zona Sul'
	},
	{
		id: 3,
		name: 'Centro'
	},
	{
		id: 4,
		name: 'Zona Oeste'
	},
	{
		id: 5,
		name: 'Baixada'
	}
]);

export const Neighborhoods = Object.freeze([
	{
		id: 1,
		name: 'Méier'
	},
	{
		id: 2,
		name: 'Irajá'
	},
	{
		id: 3,
		name: 'Lapa'
	},
	{
		id: 4,
		name: 'Botafogo'
	},
	{
		id: 5,
		name: 'Copacabana'
	},
	{
		id: 6,
		name: 'Madureira'
	},
	{
		id: 7,
		name: 'Barra da Tijuca'
	},
	{
		id: 8,
		name: 'Duque de Caxias'
	},
	{
		id: 9,
		name: 'Nova Iguaçu'
	}
]);

export const Music = {};

export const CATEGORIES = Object.freeze({
	zones: Zones,
	neighborhoods: Neighborhoods,
	music: Music
});
