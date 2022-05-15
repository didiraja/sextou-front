<script lang="ts">
	import Icon from '@iconify/svelte';
	import Button from './common/Button.svelte';
</script>

<div class="search-block material-shadow">
	<input class="input-styling" type="text" placeholder="início" />
	<input class="input-styling" type="text" placeholder="fim" />
	<input class="input-styling" type="text" placeholder="região" />
	<input class="input-styling" type="text" placeholder="bairro" />
	<input class="input-styling" type="text" placeholder="música" />
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
      mx-auto my-3 px-2 py-2 xl:mt-16 xl:mb-8 xl:px-5 xl:py-4 rounded-xl;
	}

	.input-styling {
		@apply bg-black/30 rounded-sm p-2 xl:pl-3 text-white;
		-webkit-box-shadow: inset 0px 0px 15px -2px #000000;
		box-shadow: inset 0px 0px 15px -2px #000000;
	}

	.btn-search {
		@apply bg-orange-600 font-black text-white uppercase py-3 rounded-sm flex justify-center items-center;
	}
</style>
