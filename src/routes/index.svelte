<script lang="ts">
	import Footer from '../lib/components/layout/Footer.svelte';
	import Header from '../lib/components/layout/Header.svelte';
	import Card from '../lib/components/Card.svelte';
	import SearchBlock from '../lib/components/SearchBlock.svelte';

	let showModal = true;
	function toggleModal() {

		return showModal = !showModal;
	};
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
		<div class="modal">

			<p class="modal-title">Festa no lugar X</p>

			<img class="w-full" src=http://placeimg.com/600/200/tech />

			<div class="modal-info">
					<p class="event-date">Sexta, 5 de Novembro</p>
					
					<div class="modal-tags button-pills">
						<button>Centro</button>
						<button>Lapa</button>
					</div>
					
					<div class="card-bottoms">
						<button class="bg-amber-500 font-black text-white uppercase tracking-widest p-2 rounded-md material-shadow">Comprar Ingressos</button>
					</div>
			</div>      

			<div class="modal-content text-xl leading-normal">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque mauris sapien, vitae pellentesque est feugiat at. Mauris magna odio, molestie et efficitur in, malesuada eget turpis. Etiam ornare purus vel commodo suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer pellentesque purus euismod purus ultricies, quis pellentesque felis sagittis. Cras vulputate lacinia nulla sed fringilla. Fusce varius turpis non neque pellentesque volutpat eget blandit tellus. Pellentesque sit amet eros non elit rhoncus molestie. Aenean velit sapien, placerat ut tempus non, vehicula non sapien. Nullam iaculis elit orci, quis volutpat enim tempus id.
				</p>
				
				<p>
					Nam sodales pellentesque scelerisque. Proin feugiat faucibus ipsum vitae viverra. Aliquam viverra quis massa a rhoncus. Praesent id consequat libero. Integer placerat, nisi ac rutrum aliquet, eros tortor pretium augue, a lacinia ligula turpis sed tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In orci eros, faucibus vitae magna rutrum, scelerisque luctus mauris. Sed dignissim purus sapien, a ullamcorper quam dapibus sit amet. Mauris placerat placerat quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque bibendum vestibulum mi, eget tempus urna tincidunt quis. Vestibulum dictum vestibulum arcu sed rhoncus. Curabitur a elit ante. Quisque ullamcorper sem id posuere pulvinar. 
				</p>
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">
	.section-title {
		@apply ml-8 mb-8 pl-5 -skew-x-10 border-l-8 font-black text-white text-5xl;
	}

	.card-grid {
		@apply grid grid-cols-3 gap-6;
	}

	.modal {
		@apply fixed w-2/3 max-h-full overflow-y-auto px-5 py-5 top-5 left-56
		bg-zinc-900 rounded-md shadow-lg shadow-black/80
		divide-y-[20px] divide-transparent
		text-white;

		/**** Hide Scrollbar ****/
		-ms-overflow-style: none;  /* IE and Edge */
		scrollbar-width: none;  /* Firefox */

		&::-webkit-scrollbar {
			display: none;
		}
		/**** end ****/
	}

	.modal-title {
		@apply font-black leading-snug text-5xl text-center;
	}

	.modal-info {
		@apply divide-x-[10px] divide-transparent flex justify-center	items-center;
	}
</style>