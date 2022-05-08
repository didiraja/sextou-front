<script lang="ts">
	import Footer from '../lib/components/layout/Footer.svelte';
	import Header from '../lib/components/layout/Header.svelte';
	import Card from '../lib/components/Card.svelte';
</script>

<svelte:head>
	<title>Sextou - Beta!</title>
</svelte:head>

<div class="min-h-screen">

	<Header />

	<section id="top" class="grid grid-cols-1">
		<img class="mx-auto mt-32" src="/sextou_kv.png" alt="Sextou!" />

		<div class="search-block bg-zinc-400 w-10/12 mx-auto mt-16 mb-8 px-2 py-3 rounded-md">
			<input type="text" placeholder="início">
			<input type="text" placeholder="fim">
			<input type="text" placeholder="região">
			<input type="text" placeholder="bairro">
			<input type="text" placeholder="música">
			<button class="bg-orange-600 text-white px-3 py-1">enviar</button>
		</div>
	</section>
	
	<main class="px-4 py-8">

		<div class="highlight-events mt-6 mb-16">
			<h1 class="border-l-8 border-amber-400 font-bold text-white text-5xl ml-8 mb-5 pl-5 -skew-x-10">Destaques da Noite</h1>

			<div class="highlight-grid grid grid-cols-3 gap-6">
				<Card />
	
				<Card />
	
				<Card />
			</div>
		</div>

		<div class="highlight-events">
			<h1 class="border-l-8 border-orange-600 font-bold text-white text-5xl ml-8 mb-5 pl-5 -skew-x-10">Principais Eventos</h1>

			<div class="highlight-grid grid grid-cols-3 gap-6">
				<Card />
	
				<Card />
	
				<Card />
			</div>
		</div>
	</main>

	<Footer />
</div>