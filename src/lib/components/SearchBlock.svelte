<script lang="ts">
	import Icon from '@iconify/svelte';
	import Button from './common/Button.svelte';

	export let startDate = '';
	export let endDate = '';
	export let zoneSelected = '';
	export let neighborhoodSelected = '';
	export let musicSelected = '';
</script>

<div class="search-block material-shadow">
	<input
		class="input-styling"
		type="date"
		bind:value={startDate}
		on:change={() => console.log(startDate)}
	/>

	<input
		class="input-styling"
		type="date"
		bind:value={endDate}
		on:change={() => console.log(endDate)}
	/>

	<select id="zone" class="input-styling">
		<option>Zona Norte</option>
		<option>Zona Sul</option>
		<option>Zona Centro</option>
		<option>Zona Oeste</option>
		<option>Baixada</option>
	</select>

	<select id="neighborhood" class="input-styling">
		<option>Irajá</option>
		<option>Méier</option>
		<option>Copacabana</option>
		<option>Botafogo</option>
		<option>Lapa</option>
		<option>Duque de Caxias</option>
		<option>Barra</option>
	</select>

	<select id="music" class="input-styling">
		<option>Rock</option>
		<option>Hip-hop</option>
		<option>Funk</option>
		<option>EDM</option>
	</select>

	<div class="col-span-full md:col-auto">
		<Button style="!rounded-none p-2 md:text-sm xl:text-xs">
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
