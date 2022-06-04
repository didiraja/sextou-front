<script lang="ts">
	import Icon from '@iconify/svelte';
	import Pill from './common/Pill.svelte';
	import Button from './common/Button.svelte';

	export let highlight = false;
</script>

<div class="card">
	<span class="hover:cursor-pointer" on:click={() => fire('click')}>
		<img class="card-cover" src="http://placeimg.com/320/240/tech" alt="" />
		<div class="card-date">Sexta, 5 de Novembro</div>
		<div class="card-title">Festa no lugar X</div>
	</span>
	<div>
		<Pill {highlight} on:click={() => alert('new tab | api request by neighborhood')}>Centro</Pill>
		<Pill {highlight} on:click={() => alert('new tab | api request by neighborhood')}>Lapa</Pill>
	</div>
	<div>
		<Button {highlight} on:click={() => alert('new tab | pagina de ingresso')}>
			<Icon class="mr-1 text-2xl" icon="material-symbols:airplane-ticket-rounded" /> Comprar Ingressos
		</Button>
	</div>
</div>

<style lang="postcss">
	.card {
		@apply backdrop-blur-md bg-white/5 rounded-lg p-5 divide-y-[15px] divide-transparent;

		.card-cover {
			@apply w-full rounded-lg;
		}

		.card-date {
			@apply text-xl text-white;
		}

		.card-title {
			@apply text-3xl font-bold text-white;
		}
	}
</style>
