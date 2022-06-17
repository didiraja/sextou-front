<script lang="ts">
	import CardGrid from '../templates/CardGrid.svelte';
	import Card from '../molecules/Card.svelte';
	import ErrorCard from '../molecules/ErrorCard.svelte';
	import Title from '../atoms/Title.svelte';
	import { GetEvents, GetHighlights } from '../../lib/requests/index.js';
	import { toggleModal } from '../../lib/utils.js';

	let events = [];
	let highlights = [];

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
</div>

<style lang="postcss">
</style>
