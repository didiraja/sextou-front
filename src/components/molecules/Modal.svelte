<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Icon from '@iconify/svelte';
	import Pill from '../atoms/Pill.svelte';
	import Button from '../atoms/Button.svelte';
	import { readableDate } from '../../lib/utils.js';
	import { eventDetails } from '../../store.js';

	const dispatch = createEventDispatcher();
</script>

<div class="backdrop z-20" on:click|self={() => dispatch('close')}>
	<div class="modal-wrapper">
		<div class="modal">
			<div class="nav-wrapper" on:click={() => dispatch('close')}>
				<Icon class="text-5xl" icon="material-symbols:close" />
			</div>

			<p class="modal-title">{$eventDetails.Title}</p>

			<img class="modal-cover" src={`http://localhost:1337${$eventDetails.Cover.url}`} />

			<div class="modal-info">
				<p class="date">{readableDate($eventDetails.Date)}</p>

				<div class="tags">
					<Pill>{$eventDetails.Zone.Title}</Pill>
					<Pill>{$eventDetails.Neighborhood.Name}</Pill>
				</div>

				<div class="cta">
					<Button style="md:text-xl">
						<Icon class="mr-1 text-3xl" icon="material-symbols:airplane-ticket-rounded" /> Comprar Ingressos
					</Button>
				</div>
			</div>

			<div class="modal-content">
				<p>
					{$eventDetails.Description}
				</p>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.hide-scrollbar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */

		&::-webkit-scrollbar {
			display: none;
		}
	}

	.backdrop {
		@apply fixed top-0 left-0 w-full h-full bg-black/80;
	}

	.modal-wrapper {
		@apply w-11/12 xl:max-w-[75vw] max-h-[95vh] mx-auto md:mt-8
			relative top-1/2 md:top-0 -translate-y-2/4 md:translate-y-0
			hide-scrollbar overflow-auto rounded-lg;
	}

	.modal {
		@apply max-h-full hide-scrollbar top-16 px-5 pt-3 md:p-8 xl:p-8
		bg-zinc-900 rounded-md shadow-lg shadow-black/80 
		text-white;

		.nav-wrapper {
			@apply rounded-full w-12 ml-auto mb-5 hover:bg-slate-400/10 hover:cursor-pointer;
		}

		.modal-title {
			@apply mb-5 font-black text-4xl md:text-5xl xl:text-5xl text-center;
		}

		.modal-cover {
			@apply w-full mb-5;
		}

		.modal-info {
			@apply mb-5 divide-y-[10px] xl:divide-x-[10px] divide-transparent xl:flex xl:justify-center xl:items-center;

			.date {
				@apply text-center text-2xl md:text-3xl;
			}

			.tags {
				@apply text-center text-lg md:text-xl;
			}
		}

		.modal-content {
			@apply text-xl leading-normal md:leading-relaxed tracking-wide;
		}
	}
</style>
