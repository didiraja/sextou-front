import axios from 'axios';
import qs from 'qs';
import { DEFAULT_ITEMS } from '../consts.js';

const apiBaseUrl = 'http://localhost:1337';

export const basicQuery = {
	_sort: 'Date:ASC',
	_limit: DEFAULT_ITEMS,
	_publicationState: 'live',
	Date_gte: new Date().toISOString()
};

export const GetEvents = (queryObj = basicQuery) => {
	const querySearch = qs.stringify({ ...queryObj });

	return axios.get(`${apiBaseUrl}/events?${querySearch}`);
};

export const GetHighlights = () => {
	const querySearch = qs.stringify({ ...basicQuery, _limit: 3, Highlight: true });

	return axios.get(`${apiBaseUrl}/events?${querySearch}`);
};

export const SearchEvent = (params) => {
	const querySearch = qs.stringify({
		...basicQuery,
		Date_gte: new Date(params.startDate).toISOString(),
		Date_lte: new Date(params.endDate).toISOString(),
		...(params.zoneSelected && { Zone: params.zoneSelected }),
		...(params.neighborhoodSelected && { Neighborhood: params.neighborhoodSelected }),
		...(params.musicSelected && { Music: params.musicSelected })
	});

	return axios.get(`${apiBaseUrl}/events?${querySearch}`);
};

export const FindEventsByZone = (id) => {
	return axios.get(`${apiBaseUrl}/zones/${id}`);
};
