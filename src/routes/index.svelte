<script lang="ts">
	import Icon from '@iconify/svelte';
	import Footer from '../lib/components/layout/Footer.svelte';
	import Header from '../lib/components/layout/Header.svelte';
	import Card from '../lib/components/Card.svelte';
	import SearchBlock from '../lib/components/SearchBlock.svelte';
	import Title from '../lib/components/common/Title.svelte';
	import Modal from '../lib/components/Modal.svelte';
	import { GetEvents, GetHighlights } from '../lib/requests/index.js';

	let events = [];
	let highlights = [];
	let showModal = false;
	let modalObject = {};

	function toggleModal(eventSelected) {
		modalObject = eventSelected;

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
	<Header />

	<section id="top" class="grid grid-cols-1">
		<img class="sextou-logo" src="/sextou_kv.png" alt="Sextou!" />

		<SearchBlock />
	</section>

	<main class="main-wrapper">
		<div class="highlight-events">
			<Title text="hype da noite" highlight />

			<div class="card-grid">
				{#each highlights as event}
					<Card
						{event}
						highlight
						Cover={`http://localhost:1337${event.Cover.formats.small.url}`}
						Zone={event.Zone.Title}
						Neighborhood={event.Neighborhood.Title}
						on:click={() => toggleModal(event)}
					/>
				{/each}
			</div>
		</div>

		<div class="main-events">
			<Title text="principais eventos" />

			<div class="card-grid">
				{#each events as event}
					<Card
						{event}
						Cover={`http://localhost:1337${event.Cover.formats.small.url}`}
						Zone={event.Zone.Title}
						Neighborhood={event.Neighborhood.Title}
						on:click={() => toggleModal(event)}
					/>
				{/each}
			</div>
		</div>
	</main>

	<Footer />

	{#if showModal}
		<Modal eventData={modalObject} on:close={() => toggleModal()} />
	{/if}
</div>

<style lang="postcss">
	.page-wrapper {
		@apply min-h-screen max-w-full;
	}

	.sextou-logo {
		@apply mx-auto mt-20 px-3 xl:mt-32;
	}

	.highlight-events {
		@apply mt-6 mb-16;
	}

	.main-wrapper {
		@apply px-4 py-4 xl:py-8;
	}

	.card-grid {
		@apply grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6;
	}
</style>
