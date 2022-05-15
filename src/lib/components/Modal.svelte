<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Icon from '@iconify/svelte';
	import Pill from './common/Pill.svelte';
	import Button from './common/Button.svelte';

	const dispatch = createEventDispatcher();
</script>

<div class="backdrop" on:click|self={() => dispatch('close', 'close modal')}>
	<div class="modal">
		<div
			class="nav-wrapper rounded-full w-12 ml-auto hover:bg-slate-400/10 hover:cursor-pointer"
			on:click={() => dispatch('close', 'close modal')}
		>
			<Icon class="text-5xl" icon="material-symbols:close" />
		</div>

		<p class="modal-title">Festa no lugar X</p>

		<img class="modal-cover" src="http://placeimg.com/600/200/tech" />

		<div class="modal-info">
			<p class="event-date">Sexta, 5 de Novembro</p>

			<div class="modal-tags">
				<Pill>Centro</Pill>
				<Pill>Lapa</Pill>
			</div>

			<div class="card-bottoms">
				<Button>
					<Icon class="mr-1 text-2xl" icon="material-symbols:airplane-ticket-rounded" /> Comprar Ingressos
				</Button>
			</div>
		</div>

		<div class="modal-content text-xl leading-normal">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque mauris sapien,
				vitae pellentesque est feugiat at. Mauris magna odio, molestie et efficitur in, malesuada
				eget turpis. Etiam ornare purus vel commodo suscipit. Pellentesque habitant morbi tristique
				senectus et netus et malesuada fames ac turpis egestas.
			</p>

			<br />

			<p>
				Integer pellentesque purus euismod purus ultricies, quis pellentesque felis sagittis. Cras
				vulputate lacinia nulla sed fringilla. Fusce varius turpis non neque pellentesque volutpat
				eget blandit tellus. Pellentesque sit amet eros non elit rhoncus molestie. Aenean velit
				sapien, placerat ut tempus non, vehicula non sapien. Nullam iaculis elit orci, quis volutpat
				enim tempus id.
			</p>
		</div>
	</div>
</div>

<style lang="postcss">
	.backdrop {
		@apply fixed top-0 left-0 w-full h-full bg-black/80;
	}

	.modal {
		@apply fixed w-2/3 max-h-full overflow-y-auto px-5 py-5 top-5 left-56
		bg-zinc-900 rounded-md shadow-lg shadow-black/80 
		/* divide-y-[20px] divide-transparent */
		text-white;

		/**** Hide Scrollbar ****/
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */

		&::-webkit-scrollbar {
			display: none;
		}
		/**** end ****/

		.modal-title {
			@apply font-black text-5xl text-center mb-5;
		}

		.modal-cover {
			@apply w-full mb-5;
		}

		.modal-info {
			@apply mb-5 divide-x-[10px] divide-transparent flex justify-center items-center;
		}
	}
</style>
