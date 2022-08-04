<script lang="ts">
	import { goto } from '$app/navigation';
	import Icon from '@iconify/svelte';
	import { format } from 'date-fns';
	import Button from '../atoms/Button.svelte';
	import { Zones, Neighborhoods } from '../../lib/consts.js';
	import { SearchEvent } from '../../lib/requests/index.js';
	import { searchResults } from '../../store.js';
	import { getWeekendDates } from '../../lib/utils.js';

	export let startDate = format(getWeekendDates().weekendStart, 'yyyy-MM-dd');
	export let endDate = format(getWeekendDates().weekendEnd, 'yyyy-MM-dd');
	export let zoneSelected = null;
	export let neighborhoodSelected = null;
	export let musicSelected = null;

	let showErrorMsg = false;

	function toggleErrorBox() {
		return (showErrorMsg = !showErrorMsg);
	}

	function showAndCleanError() {
		toggleErrorBox();

		setTimeout(() => {
			if (showErrorMsg) return (showErrorMsg = false);
		}, 3000);
	}

	function validateSearch(searchQuery) {
		if (endDate < startDate) return showAndCleanError();

		// console.log('busca validada!');

		return sendToSearchRoute(searchQuery);
	}

	function sendToSearchRoute(searchQuery) {
		return SearchEvent(searchQuery)
			.then((response) => {
				searchResults.set({
					query: searchQuery,
					result: response.data
				});

				// console.log($searchResults);

				goto('/search');
			})
			.catch((e) => console.log(e));
	}
</script>

<div class="search-block material-shadow">
	{#if showErrorMsg}
		<div class="error-wrapper" on:click={() => toggleErrorBox()}>
			<Icon class="inline-block text-2xl mr" icon="material-symbols:error" color="white" />
			<p class="error-msg">A data de Fim precisa vir DEPOIS da data de Início</p>
		</div>
	{/if}

	<div class="grid-wrapper">
		<input
			class="input-styling"
			class:inputError={showErrorMsg}
			type="date"
			bind:value={startDate}
		/>

		<input class="input-styling" class:inputError={showErrorMsg} type="date" bind:value={endDate} />

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
			<option value={null}>Todos os sons</option>
			<option>Rock</option>
			<option>Hip-hop</option>
			<option>Funk</option>
			<option>EDM</option>
		</select>

		<div class="col-span-full md:col-auto">
			<Button
				style="!rounded-none p-2 md:text-sm xl:text-xs"
				on:click={() =>
					validateSearch({
						startDate,
						endDate,
						zoneSelected,
						neighborhoodSelected,
						musicSelected
					})}
			>
				<Icon class="mr-1 text-2xl" icon="material-symbols:search-rounded" /> Buscar Evento
			</Button>
		</div>
	</div>
</div>

<style lang="postcss">
	.search-block {
		@apply relative backdrop-blur-md bg-white/10 w-10/12
      mx-auto my-5 p-3 xl:mt-16 xl:mb-8 xl:px-5 xl:py-4 rounded-xl;
	}

	.error-wrapper {
		@apply bg-red-700/90 mb-2 px-3 py-2 shadow-sm shadow-black/50;
		position: absolute;
		top: 7rem;
	}

	.error-msg {
		@apply inline-block text-base text-center text-white;
	}

	.grid-wrapper {
		@apply grid grid-cols-3 xl:grid-cols-6 gap-2;
	}

	.inputError {
		@apply border border-red-900;
	}

	.input-styling {
		@apply bg-black/30 rounded-sm p-2 xl:pl-3 text-white;
		-webkit-box-shadow: inset 0px 0px 15px -2px #000000;
		box-shadow: inset 0px 0px 15px -2px #000000;

		option {
			@apply bg-zinc-800 pb-3;
		}
	}
</style>
