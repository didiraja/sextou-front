<script lang="ts">
	import Icon from '@iconify/svelte';
	import Footer from '../lib/components/layout/Footer.svelte';
	import Header from '../lib/components/layout/Header.svelte';
	import Card from '../lib/components/Card.svelte';
	import SearchBlock from '../lib/components/SearchBlock.svelte';
	import Title from '../lib/components/common/Title.svelte';
	import Modal from '../lib/components/Modal.svelte';

	let showModal = false;

	function toggleModal() {
		return (showModal = !showModal);
	}
</script>

<svelte:head>
	<title>Sextou - Beta!</title>
</svelte:head>

<div class="min-h-screen max-w-full">
	<Header />

	<section id="top" class="grid grid-cols-1">
		<img class="mx-auto mt-16 px-3 xl:mt-32" src="/sextou_kv.png" alt="Sextou!" />

		<SearchBlock />
	</section>

	<main class="px-4 py-4 xl:py-8">
		<div class="highlight-events mt-6 mb-16">
			<Title text="hype da noite" highlight />

			<div class="card-grid">
				<Card highlight on:click={() => toggleModal()} />

				<Card highlight />

				<Card highlight />
			</div>
		</div>

		<div class="main-events">
			<Title text="principais eventos" />

			<div class="card-grid">
				<Card />

				<Card />

				<Card />
			</div>
		</div>
	</main>

	<Footer />

	{#if showModal}
		<Modal on:close={() => toggleModal()} />
	{/if}
</div>

<style lang="postcss">
	.card-grid {
		@apply grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6;
	}
</style>
