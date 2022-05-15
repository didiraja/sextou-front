<script lang="ts">
	import Icon from '@iconify/svelte';
	import Pill from './common/Pill.svelte';
	import Button from './common/Button.svelte';

	export let highlight = false;
</script>

<div class="card" on:click>
	<img class="card-cover" src="http://placeimg.com/320/240/tech" alt="" />
	<div class="card-date">Sexta, 5 de Novembro</div>
	<div class="card-title">Festa no lugar X</div>
	<div>
		<Pill {highlight}>Centro</Pill>
		<Pill {highlight}>Lapa</Pill>
	</div>
	<div>
		<Button {highlight}>
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
