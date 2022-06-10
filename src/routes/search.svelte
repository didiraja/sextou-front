<script lang="ts">
	import { get } from 'svelte/store';
	import TopBlock from '../components/organisms/TopBlock.svelte';
	import Title from '../components/atoms/Title.svelte';
	import Card from '../components/molecules/Card.svelte';
	import { searchResults } from '../store.js';

	$: events = get(searchResults);
</script>

<svelte:head>
	<title>Sextou - Busca de eventos no Rio de Janeiro</title>
</svelte:head>

<TopBlock />

<Title text="Eventos no Rio de Janeiro para sua busca" />

{#each events as event}
	<Card
		{event}
		Cover={`http://localhost:1337${event.Cover.formats.small.url}`}
		Zone={event.Zone.Title}
		Neighborhood={event.Neighborhood.Title}
		on:click={() => dispatch('cardClick', event)}
	/>
{:else}
	<strong class="text-white">Nada por aqui!</strong>
{/each}

<style></style>
