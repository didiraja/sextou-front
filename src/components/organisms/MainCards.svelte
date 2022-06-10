<script lang="ts">
	import Title from '../atoms/Title.svelte';
	import Card from '../molecules/Card.svelte';

	// TODO: create dispatch for Card click
</script>

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

<style>
	.highlight-events {
		@apply mt-6 mb-16;
	}

	.card-grid {
		@apply grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6;
	}
</style>
