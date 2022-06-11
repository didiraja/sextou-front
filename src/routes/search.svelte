<script lang="ts">
	import { get } from 'svelte/store';
	import MainContainer from '../components/templates/MainContainer.svelte';
	import CardGrid from '../components/templates/CardGrid.svelte';
	import Card from '../components/molecules/Card.svelte';
	import Title from '../components/atoms/Title.svelte';
	import { toggleModal } from '../lib/utils.js';
	import { searchResults } from '../store.js';

	$: searchObject = $searchResults;
	$: events = searchObject.result;
</script>

<svelte:head>
	<title>Sextou - Busca de eventos no Rio de Janeiro</title>
</svelte:head>

<MainContainer>
	<Title
		text={`Eventos de ${
			searchObject.query.musicSelected ? `${searchObject.query.musicSelected} no` : ''
		} Rio de Janeiro`}
	/>

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
			<strong class="text-white">Nada por aqui!</strong>
		{/each}
	</CardGrid>
</MainContainer>
