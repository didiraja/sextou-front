<script lang="ts">
	import Icon from '@iconify/svelte';
	import Pill from './common/Pill.svelte';
	import Button from './common/Button.svelte';

	export let highlight = false;
	export let Cover = 'http://placeimg.com/320/240/tech';
	export let Zone = 'Centro';
	export let Neighborhood = 'Lapa';
	export let Music = 'Funk';
	export let event = {
		Title: 'Festa no Lugar X',
		Date: `2022-02-01T23:30:00.000Z`,
		Ticket: ''
	};
</script>

<div class="card">
	<span class="hover:cursor-pointer" on:click={() => fire('click')}>
		<img class="card-cover" src={Cover} alt="" />
		<div class="card-date">{event.Date}</div>
		<div class="card-title">{event.Title}</div>
	</span>

	<div>
		{#if Zone}
			<Pill {highlight} on:click={() => alert('new tab | api request by neighborhood')}>
				{Zone}
			</Pill>
		{/if}

		{#if Neighborhood}
			<Pill {highlight} on:click={() => alert('new tab | api request by neighborhood')}>
				{Neighborhood}
			</Pill>
		{/if}

		{#if Music}
			<Pill {highlight} on:click={() => alert('new tab | api request by neighborhood')}>
				{Music}
			</Pill>
		{/if}
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
