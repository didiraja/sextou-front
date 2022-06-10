<script lang="ts">
	import Icon from '@iconify/svelte';
	import TopBlock from '../components/organisms/TopBlock.svelte';
	import MainCards from '../components/organisms/MainCards.svelte';
	import Footer from '../components/molecules/Footer.svelte';
	import Modal from '../components/molecules/Modal.svelte';
	let showModal = false;
	import { eventDetails } from '../store.js';

	function toggleModal(eventBubble) {
		// sends data to eventDetails store
		if (eventBubble) eventDetails.update(() => eventBubble.detail);

		return (showModal = !showModal);
	}
</script>

<svelte:head>
	<title>Sextou - Beta!</title>
</svelte:head>

<div class="page-wrapper">
	<TopBlock />

	<main class="main-wrapper">
		<MainCards on:cardClick={(event) => toggleModal(event)} />
	</main>

	<Footer />

	{#if showModal}
		<Modal on:close={() => toggleModal()} />
	{/if}
</div>

<style lang="postcss">
	.page-wrapper {
		@apply min-h-screen max-w-full;
	}

	.main-wrapper {
		@apply px-4 py-4 xl:py-8;
	}
</style>
