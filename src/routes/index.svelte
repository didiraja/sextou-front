<script lang="ts">
	import Footer from '../lib/components/layout/Footer.svelte';
	import Header from '../lib/components/layout/Header.svelte';
	import Card from '../lib/components/Card.svelte';
	import SearchBlock from '../lib/components/SearchBlock.svelte';
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
				<Card />
	
				<Card />
	
				<Card />
			</div>
		</div>

		<div class="highlight-events">
			<h1 class="section-title border-orange-600">principais eventos</h1>

			<div class="card-grid">
				<Card />
	
				<Card />
	
				<Card />
			</div>
		</div>
	</main>

	<Footer />
</div>

<style type="text/postcss">
	.section-title {
		@apply border-l-8 font-black text-white text-5xl ml-8 mb-5 pl-5 -skew-x-10;
	}

	.card-grid {
		@apply grid grid-cols-3 gap-6;
	}
</style>