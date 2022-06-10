<script lang="ts">
	// import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import PageContainer from '../components/templates/PageContainer.svelte';
	import MainContainer from '../components/templates/MainContainer.svelte';
	import CardGrid from '../components/templates/CardGrid.svelte';
	import TopBlock from '../components/organisms/TopBlock.svelte';
	import Card from '../components/molecules/Card.svelte';
	import Title from '../components/atoms/Title.svelte';
	import { searchResults } from '../store.js';

	$: searchObject = $searchResults;
	$: events = searchObject.result;
</script>

<svelte:head>
	<title>Sextou - Busca de eventos no Rio de Janeiro</title>
</svelte:head>

<PageContainer>
	<TopBlock />

	<MainContainer>
		<Title text={`Eventos de ${searchObject.query.musicSelected} no Rio de Janeiro`} />

		<CardGrid>
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
		</CardGrid>
	</MainContainer>
</PageContainer>
