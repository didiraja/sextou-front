import CardGrid from '../templates/CardGrid.svelte';
	import Card from '../molecules/Card.svelte';
	import ErrorCard from '../molecules/ErrorCard.svelte';
	import Title from '../atoms/Title.svelte';
	import Button from '../atoms/Button.svelte';
// import "./HomeCards.pcss";

function HomeCards() {
  return (
    <div class="highlight-events">
	<Title text="hype da noite" highlight />

	<CardGrid>
		{#each highlights as event}
			<Card
				{event}
				highlight
				Cover={coverURL(event.Cover.url)}
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
				Cover={coverURL(event.Cover.url)}
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
</div>
  );
}

export default HomeCards;
