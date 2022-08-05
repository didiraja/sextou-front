<script lang="ts">
	import { page } from '$app/stores';
	import { CATEGORIES } from '../../lib/consts.js';
	import { FindEventsByCat } from '../../lib/requests/index.js';
	import Title from '../../components/atoms/Title.svelte';
	import MainContainer from '../../components/templates/MainContainer.svelte';
	import CardGrid from '../../components/templates/CardGrid.svelte';
	import ErrorCard from '../../components/molecules/ErrorCard.svelte';
	import Card from '../../components/molecules/Card.svelte';

	// $page.params
	// category: "zone"
	// id: "3"

	const catFind = CATEGORIES[$page.params.category];

	const catObj = catFind.findIndex(
		(item: Record<string, string | number>) => item.id === Number($page.params.id)
	);

	const catName = catFind[catObj].name;

	let events = [];

	FindEventsByCat($page.params.category, $page.params.id)
		.then((response) => {
			// console.log(response.data)

			return (events = response.data.Events);
		})
		.catch((e) => console.log(e));
</script>

<MainContainer>
	<Title text={`Eventos - ${catName}`} />

	<CardGrid>
		{#if events && events.length > 0}
			{#each events as event}
				<Card
					{event}
					Cover={`http://localhost:1337${event.Cover.formats.small.url}`}
					Zone={event.Zone.Title}
					Neighborhood={event.Neighborhood.Title}
				/>
				<!-- on:click={() => toggleModal(event)} -->
			{/each}
		{:else}
			<ErrorCard>Nenhuma boa por aqui</ErrorCard>
		{/if}
	</CardGrid>
</MainContainer>
