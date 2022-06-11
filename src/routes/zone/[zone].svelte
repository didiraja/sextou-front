<script>
	import { page } from '$app/stores';
	import { Zones } from '../../lib/consts.js';
	import Title from '../../components/atoms/Title.svelte';
	import MainContainer from '../../components/templates/MainContainer.svelte';
	import CardGrid from '../../components/templates/CardGrid.svelte';
	import Card from '../../components/molecules/Card.svelte';
	import { FindEventsByZone } from '../../lib/requests/index.js';

	const zoneIndex = Zones.findIndex((item) => item.id === Number($page.params.zone));

	let zonePage = Zones[zoneIndex];
	let events = [];

	FindEventsByZone(zonePage.id)
		.then((response) => {
			// console.log(response.data)

			return (events = response.data.Events);
		})
		.catch((e) => console.log(e));
</script>

<MainContainer>
	<Title text={`Eventos ${zonePage.id === 3 ? 'no' : 'na'} ${zonePage.name}`} />

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
