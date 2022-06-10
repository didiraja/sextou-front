<script lang="ts">
	import { goto } from '$app/navigation';
	import Icon from '@iconify/svelte';
	import Button from '../atoms/Button.svelte';
	import { Zones, Neighborhoods } from '../../lib/consts.js';
	import { SearchEvent } from '../../lib/requests/index.js';
	import { searchResults } from '../../store.js';

	// TO DO: default date - whole month or weekend
	export let startDate = '2022-09-01T00:00:00.000Z';
	export let endDate = '2022-09-30T00:00:00.000Z';
	export let zoneSelected = null;
	export let neighborhoodSelected = null;
	export let musicSelected = '';

	function searchEvent(searchQuery) {
		return SearchEvent(searchQuery)
			.then((response) => {
				searchResults.update(() => response.data);

				return goto('/search');
			})
			.catch((e) => console.log(e));
	}
</script>

<div class="search-block material-shadow">
	<input class="input-styling" type="date" bind:value={startDate} />

	<input class="input-styling" type="date" bind:value={endDate} />

	<select id="zone" class="input-styling" bind:value={zoneSelected}>
		<option value={null}>Todos as regiões</option>
		{#each Zones as zone}
			<option value={zone.id}>{zone.name}</option>
		{/each}
	</select>

	<select id="neighborhood" class="input-styling" bind:value={neighborhoodSelected}>
		<option value={null}>Todos os bairros</option>
		{#each Neighborhoods as neighborhood}
			<option value={neighborhood.id}>{neighborhood.name}</option>
		{/each}
	</select>

	<select id="music" class="input-styling" bind:value={musicSelected}>
		<option value="">Todos os sons</option>
		<option>Rock</option>
		<option>Hip-hop</option>
		<option>Funk</option>
		<option>EDM</option>
	</select>

	<div class="col-span-full md:col-auto">
		<Button
			style="!rounded-none p-2 md:text-sm xl:text-xs"
			on:click={() =>
				searchEvent({ startDate, endDate, zoneSelected, neighborhoodSelected, musicSelected })}
		>
			<Icon class="mr-1 text-2xl" icon="material-symbols:search-rounded" /> Buscar Evento
		</Button>
	</div>
</div>

<style lang="postcss">
	.search-block {
		@apply grid grid-cols-3 xl:grid-cols-6 gap-2
      backdrop-blur-md bg-white/10 w-10/12
      mx-auto my-5 p-3 xl:mt-16 xl:mb-8 xl:px-5 xl:py-4 rounded-xl;
	}

	.input-styling {
		@apply bg-black/30 rounded-sm p-2 xl:pl-3 text-white;
		-webkit-box-shadow: inset 0px 0px 15px -2px #000000;
		box-shadow: inset 0px 0px 15px -2px #000000;

		option {
			@apply bg-zinc-800 pb-3;
		}
	}

	.btn-search {
		@apply bg-orange-600 font-black text-white uppercase py-3 rounded-sm flex justify-center items-center;
	}
</style>
