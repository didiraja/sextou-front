<script lang="ts">
	import { goto } from '$app/navigation';
	import Icon from '@iconify/svelte';
	import { readableDate } from '../../lib/utils.js';
	import Pill from '../atoms/Pill.svelte';
	import Button from '../atoms/Button.svelte';

	export let highlight = false;
	export let Cover = '';
	export let Zone = '';
	export let Neighborhood = '';
	export let Music = '';

	interface EventInterface {
		Title: string;
		Date: string;
		Description: string;
		Ticket: string;
		Zone: object;
		Neighborhood: object;
		Music: object;
		Cover: object;
	}

	export let event: EventInterface = {
		Title: '',
		Date: '',
		Description: '',
		Ticket: '',
		Zone: {
			id: ''
		},
		Neighborhood: {
			id: ''
		},
		Music: {
			id: ''
		},
		Cover: {
			url: ''
		}
	};
</script>

<div class="card">
	<span class="hover:cursor-pointer" on:click>
		<img class="card-cover" src={Cover} alt="" />
		<div class="card-date">{readableDate(event.Date)}</div>
		<div class="card-title">{event.Title}</div>
	</span>

	<div class="card-meta">
		{#if Zone}
			<Pill {highlight} on:click={() => goto(`/zone/${event.Zone.id}`)}>
				{Zone}
			</Pill>
		{/if}

		{#if Neighborhood}
			<Pill {highlight} on:click={() => goto(`/neighborhoods/${event.Neighborhood.id}`)}>
				{Neighborhood}
			</Pill>
		{/if}

		{#if Music}
			<Pill {highlight} on:click={() => goto(`/music/${event.Music.id}`)}>
				{Music}
			</Pill>
		{/if}
	</div>

	<div class="card-bottom">
		<Button {highlight} on:click={() => alert('new tab | pagina de ingresso')}>
			<Icon class="mr-1 text-2xl" icon="material-symbols:airplane-ticket-rounded" /> Comprar Ingressos
		</Button>
	</div>
</div>

<style lang="postcss">
	.card {
		@apply backdrop-blur-md bg-zinc-900 rounded-lg p-5 relative;

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

		.card-meta {
			@apply my-3;
		}

		/* .card-bottom {
		} */
	}
</style>
