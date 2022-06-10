<script lang="ts">
	import Icon from '@iconify/svelte';
	import TopBlock from '../components/organisms/TopBlock.svelte';
	import MainCards from '../components/organisms/MainCards.svelte';
	import Footer from '../components/layout/Footer.svelte';
	import Modal from '../components/Modal.svelte';
	import { GetEvents, GetHighlights } from '../lib/requests/index.js';
	import { eventDetails } from '../store.js';

	let events = [];
	let highlights = [];
	let showModal = false;

	function toggleModal(eventSelected) {
		// sends data to eventDetails store
		if (eventSelected) eventDetails.update(() => eventSelected);

		return (showModal = !showModal);
	}

	GetEvents()
		.then((response) => {
			// console.log(response.data);

			return (events = response.data);
		})
		.catch((e) => console.log(e));

	GetHighlights()
		.then((response) => {
			// console.log(response.data);

			return (highlights = response.data);
		})
		.catch((e) => console.log(e));
</script>

<svelte:head>
	<title>Sextou - Beta!</title>
</svelte:head>

<div class="page-wrapper">
	<TopBlock />

	<main class="main-wrapper">
		<MainCards />
	</main>

	<Footer />

	{#if showModal}
		<Modal on:close={() => toggleModal()} />
	{/if}
</div>

<style lang="postcss">
	.page-wrapper {
		@apply min-h-screen max-w-full;
	}

	.main-wrapper {
		@apply px-4 py-4 xl:py-8;
	}
</style>
