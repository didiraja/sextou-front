<script lang="ts">
	// import IntersectionObserver from 'svelte-intersection-observer';
	import CardGrid from '../templates/CardGrid.svelte';
	import Card from '../molecules/Card.svelte';
	import ErrorCard from '../molecules/ErrorCard.svelte';
	import Title from '../atoms/Title.svelte';
	import { basicQuery, GetEvents, GetHighlights } from '../../lib/requests/index.js';
	import { toggleModal } from '../../lib/utils.js';
	import { DEFAULT_ITEMS } from '../../lib/consts.js';
	import Icon from '@iconify/svelte';
	import Button from '../atoms/Button.svelte';

	let events = [];
	let highlights = [];
	let startQuery = 0;
	let showMoreEventsBtn = true;

	// let element;
	// let intersecting;

	GetHighlights()
		.then((response) => {
			// console.log(response.data);

			return (highlights = response.data);
		})
		.catch((e) => console.log(e));

	GetEvents()
		.then((response) => {
			// console.log(response.data);

			events = response.data;
		})
		.catch((e) => console.log(e));

	function moreEvents() {
		startQuery = startQuery + DEFAULT_ITEMS;

		const eventQuery = {
			...basicQuery,
			_start: startQuery,
			_limit: 10
		};

		GetEvents(eventQuery)
			.then((response) => {
				const shouldLoadMoreEvents = response.data.length === 0;

				if (shouldLoadMoreEvents) return (showMoreEventsBtn = false);

				const updatedEvents = [...events, ...response.data];

				// console.log(updatedEvents);

				events = updatedEvents;
			})
			.catch((e) => console.log(e));
	}
</script>

<div class="highlight-events">
	<Title text="hype da noite" highlight />

	<CardGrid>
		{#each highlights as event}
			<Card
				{event}
				highlight
				Cover={`http://localhost:1337${event.Cover.formats.small.url}`}
				Zone={event.Zone.Title}
				Neighborhood={event.Neighborhood.Title}
				on:click={() => toggleModal(event)}
			/>
		{:else}
			<ErrorCard>Nenhum evento encontrado</ErrorCard>
		{/each}
	</CardGrid>
</div>

<div class="main-events">
	<Title text="principais eventos" />

	<CardGrid>
		{#each events as event}
			<Card
				{event}
				Cover={`http://localhost:1337${event.Cover.formats.small.url}`}
				Zone={event.Zone.Title}
				Neighborhood={event.Neighborhood.Title}
				on:click={() => toggleModal(event)}
			/>
		{:else}
			<ErrorCard>Nenhum evento encontrado</ErrorCard>
		{/each}
	</CardGrid>

	{#if showMoreEventsBtn}
		<Button on:click={() => moreEvents()}>
			<Icon class="mr-1 text-2xl" icon="ic:baseline-library-add" /> Mais eventos
		</Button>
	{/if}

	<!-- <IntersectionObserver {element} on:intersect={() => getEventsPaginated()}>
		<div class="load-trigger" bind:this={element} />
	</IntersectionObserver> -->
</div>

<style lang="postcss">
</style>
