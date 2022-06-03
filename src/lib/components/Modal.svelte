<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Icon from '@iconify/svelte';
	import Pill from './common/Pill.svelte';
	import Button from './common/Button.svelte';

	const dispatch = createEventDispatcher();
</script>

<div class="backdrop" on:click|self={() => dispatch('close', 'close modal')}>
	<div class="modal-wrapper">
		<div class="modal">
			<div class="nav-wrapper" on:click={() => dispatch('close', 'close modal')}>
				<Icon class="text-5xl" icon="material-symbols:close" />
			</div>

			<p class="modal-title">Festa no lugar X</p>

			<img class="modal-cover" src="http://placeimg.com/600/200/tech" />

			<div class="modal-info">
				<p class="date">Sexta, 5 de Novembro</p>

				<div class="tags">
					<Pill>Centro</Pill>
					<Pill>Lapa</Pill>
				</div>

				<div class="cta">
					<Button>
						<Icon class="mr-1 text-2xl" icon="material-symbols:airplane-ticket-rounded" /> Comprar Ingressos
					</Button>
				</div>
			</div>

			<div class="modal-content text-xl leading-normal">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque mauris sapien,
					vitae pellentesque est feugiat at. Mauris magna odio, molestie et efficitur in, malesuada
					eget turpis. Etiam ornare purus vel commodo suscipit. Pellentesque habitant morbi
					tristique senectus et netus et malesuada fames ac turpis egestas.
				</p>

				<br />

				<p>
					Integer pellentesque purus euismod purus ultricies, quis pellentesque felis sagittis. Cras
					vulputate lacinia nulla sed fringilla. Fusce varius turpis non neque pellentesque volutpat
					eget blandit tellus. Pellentesque sit amet eros non elit rhoncus molestie. Aenean velit
					sapien, placerat ut tempus non, vehicula non sapien. Nullam iaculis elit orci, quis
					volutpat enim tempus id.
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
		@apply w-11/12 xl:max-w-[75vw] max-h-[95vh] hide-scrollbar overflow-auto mx-auto relative top-1/2 -translate-y-2/4 rounded-lg;
	}

	.modal {
		@apply max-h-full hide-scrollbar top-16 p-5 pt-3 xl:p-8
		bg-zinc-900 rounded-md shadow-lg shadow-black/80 
		text-white;

		.nav-wrapper {
			@apply rounded-full w-12 ml-auto mb-5 hover:bg-slate-400/10 hover:cursor-pointer;
		}

		.modal-title {
			@apply mb-5 font-black text-4xl xl:text-5xl text-center;
		}

		.modal-cover {
			@apply w-full mb-5;
		}

		.modal-info {
			@apply mb-5 divide-y-[10px] xl:divide-x-[10px] divide-transparent xl:flex xl:justify-center xl:items-center;

			.date {
				@apply text-center text-3xl;
			}

			.tags {
				@apply text-center text-xl;
			}
		}
	}
</style>
