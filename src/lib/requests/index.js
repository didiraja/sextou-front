import axios from 'axios';
import qs from 'qs';

const apiBaseUrl = 'http://localhost:1337';

const basicQuery = {
	_sort: 'Date:ASC',
	_limit: 9,
	_publicationState: 'live',
	Date_gte: new Date().toISOString()
};

export const GetEvents = () => {
	const querySearch = qs.stringify({ ...basicQuery, Highlight: false });

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
