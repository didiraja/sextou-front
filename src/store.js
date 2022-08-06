import { writable } from 'svelte/store';
import { MODAL_MOCK } from './lib/mock.js';

export const appConfig = writable({
	showModal: false,
	isOffline: true
});

export const eventDetails = writable({ ...MODAL_MOCK });

export const searchResults = writable({
	query: null,
	result: null
});
