<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Icon from '@iconify/svelte';
	import Footer from '../lib/components/layout/Footer.svelte';
	import Header from '../lib/components/layout/Header.svelte';
	import Card from '../lib/components/Card.svelte';
	import SearchBlock from '../lib/components/SearchBlock.svelte';

	let showModal = true;
	function toggleModal() {
		return (showModal = !showModal);
	}

	const dispatch = createEventDispatcher();
</script>

<svelte:head>
	<title>Sextou - Beta!</title>
</svelte:head>

<div class="min-h-screen">
	<Header />

	<section id="top" class="grid grid-cols-1">
		<img class="mx-auto mt-32" src="/sextou_kv.png" alt="Sextou!" />

		<SearchBlock />
	</section>

	<main class="px-4 py-8">
		<div class="highlight-events mt-6 mb-16">
			<h1 class="section-title border-amber-400">hype da noite</h1>

			<div class="card-grid">
				<Card on:click={() => toggleModal()} />

				<Card />

				<Card />
			</div>
		</div>

		<div class="main-events">
			<h1 class="section-title border-orange-600">principais eventos</h1>

			<div class="card-grid">
				<Card />

				<Card />

				<Card />
			</div>
		</div>
	</main>

	<Footer />

	{#if showModal}
		<!-- TODO when turn modal into a component -->
		<!-- <div class="backdrop" on:click|self={() => dispatch('close', 'close modal')} on:close="{() => toggleModal()}"> -->.
		<div class="backdrop" on:click="{() => toggleModal()}">
			<div class="modal">
				<div class="nav-wrapper rounded-full w-12 ml-auto hover:bg-slate-400/10 hover:cursor-pointer" on:click="{() => toggleModal()}">
					<Icon
						class="text-5xl"
						icon="material-symbols:close"
					/>
				</div>

				<p class="modal-title">Festa no lugar X</p>

				<img class="modal-cover" src="http://placeimg.com/600/200/tech" />

				<div class="modal-info">
					<p class="event-date">Sexta, 5 de Novembro</p>

					<div class="modal-tags button-pills">
						<button>Centro</button>
						<button>Lapa</button>
					</div>

					<div class="card-bottoms">
						<button
							class="bg-amber-500 font-black text-white uppercase tracking-widest p-2 rounded-md material-shadow
								flex justify-center	items-center"
						>
							<Icon class="mr-1 text-2xl" icon="material-symbols:airplane-ticket-rounded" /> Comprar
							Ingressos
						</button>
					</div>
				</div>

				<div class="modal-content text-xl leading-normal">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque mauris
						sapien, vitae pellentesque est feugiat at. Mauris magna odio, molestie et efficitur in,
						malesuada eget turpis. Etiam ornare purus vel commodo suscipit. Pellentesque habitant
						morbi tristique senectus et netus et malesuada fames ac turpis egestas.
					</p>

					<br />

					<p>
						Integer pellentesque purus euismod purus ultricies, quis pellentesque felis sagittis.
						Cras vulputate lacinia nulla sed fringilla. Fusce varius turpis non neque pellentesque
						volutpat eget blandit tellus. Pellentesque sit amet eros non elit rhoncus molestie.
						Aenean velit sapien, placerat ut tempus non, vehicula non sapien. Nullam iaculis elit
						orci, quis volutpat enim tempus id.
					</p>
				</div>
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">
	.section-title {
		@apply ml-8 mb-8 pl-5 -skew-x-10 border-l-[15px] font-black text-white text-5xl;
	}

	.card-grid {
		@apply grid grid-cols-3 gap-6;
	}

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
	}

	.modal-title {
		@apply font-black text-5xl text-center mb-5;
	}

	.modal-cover {
		@apply w-full mb-5;
	}

	.modal-info {
		@apply mb-5 divide-x-[10px] divide-transparent flex justify-center items-center;
	}
</style>
