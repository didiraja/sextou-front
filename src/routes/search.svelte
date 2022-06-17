<script lang="ts">
	import MainContainer from '../components/templates/MainContainer.svelte';
	import CardGrid from '../components/templates/CardGrid.svelte';
	import Card from '../components/molecules/Card.svelte';
	import ErrorCard from '../components/molecules/ErrorCard.svelte';
	import Title from '../components/atoms/Title.svelte';
	import { toggleModal } from '../lib/utils.js';
	import { searchResults } from '../store.js';
</script>

<svelte:head>
	<title>Sextou - Busca de eventos no Rio de Janeiro</title>
</svelte:head>

<MainContainer>
	<Title text={`Busca de eventos no Rio de Janeiro`} />

	<CardGrid>
		{#if $searchResults.result && $searchResults.result.length > 0}
			{#each $searchResults.result as event}
				<Card
					{event}
					Cover={`http://localhost:1337${event.Cover.formats.small.url}`}
					Zone={event.Zone.Title}
					Neighborhood={event.Neighborhood.Title}
					on:click={() => toggleModal(event)}
				/>
			{/each}
		{:else}
			<ErrorCard>Não achamos nenhuma boa por aqui</ErrorCard>
		{/if}
	</CardGrid>
</MainContainer>
