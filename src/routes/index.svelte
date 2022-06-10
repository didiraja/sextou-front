<script lang="ts">
	import Icon from '@iconify/svelte';
	import PageContainer from '../components/templates/PageContainer.svelte';
	import MainContainer from '../components/templates/MainContainer.svelte';
	import TopBlock from '../components/organisms/TopBlock.svelte';
	import MainCards from '../components/organisms/MainCards.svelte';
	import Footer from '../components/molecules/Footer.svelte';
	import Modal from '../components/molecules/Modal.svelte';
	import { eventDetails } from '../store.js';

	let showModal = false;
	function toggleModal(eventBubble) {
		// sends data to eventDetails store
		if (eventBubble) eventDetails.set(eventBubble.detail);

		return (showModal = !showModal);
	}
</script>

<svelte:head>
	<title>Sextou - Beta!</title>
</svelte:head>

<PageContainer>
	<TopBlock />

	<MainContainer>
		<MainCards on:cardClick={(event) => toggleModal(event)} />
	</MainContainer>

	<Footer />

	{#if showModal}
		<Modal on:close={() => toggleModal()} />
	{/if}
</PageContainer>
