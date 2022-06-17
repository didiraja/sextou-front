<script lang="ts">
	import { goto } from '$app/navigation';
	import Icon from '@iconify/svelte';
	import { readableDate } from '../../lib/utils.js';
	import Pill from '../atoms/Pill.svelte';
	import Button from '../atoms/Button.svelte';

	export let highlight = false;
	export let Cover = 'http://placeimg.com/320/240/tech';
	export let Zone = 'Centro';
	export let Neighborhood = 'Lapa';
	export let Music = 'Funk';
	export let event = {
		Title: 'Festa no Lugar X',
		Date: `2022-02-01T23:30:00.000Z`,
		Ticket: '',
		Zone: {
			id: 3,
			Title: 'Centro'
		},
		Neighbor: {
			id: 2,
			Title: 'Lapa'
		},
		Music: {
			id: 4,
			Title: 'Funk'
		}
	};
</script>

<div class="card">
	<span class="hover:cursor-pointer" on:click>
		<img class="card-cover" src={Cover} alt="" />
		<div class="card-date">{readableDate(event.Date)}</div>
		<div class="card-title">{event.Title}</div>
	</span>

	<div class="pills-wrapper">
		{#if Zone}
			<Pill {highlight} on:click={() => goto(`/zone/${event.Zone.id}`)}>
				{Zone}
			</Pill>
		{/if}

		{#if Neighborhood}
			<Pill {highlight} on:click={() => goto(`/neighbor/${event.Neighbor.id}`)}>
				{Neighborhood}
			</Pill>
		{/if}

		{#if Music}
			<Pill {highlight} on:click={() => goto(`/music/${event.Music.id}`)}>
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
		@apply backdrop-blur-md bg-zinc-900 rounded-lg p-5;

		.card-cover {
			@apply w-full h-60 object-cover rounded-lg mb-3;
		}

		.card-date {
			@apply text-xl text-white mb-1;
		}

		.card-title {
			@apply text-3xl font-bold text-white;
			/* hack to limit to 2 lines */
			text-overflow: ellipsis;
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}

		.pills-wrapper {
			@apply my-3;
		}
	}
</style>
