<script lang="ts">
	import Icon from '@iconify/svelte';

	import MainContainer from '../components/templates/MainContainer.svelte';

	import MainCards from '../components/organisms/MainCards.svelte';

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

<MainContainer>
	<MainCards on:cardClick={(event) => toggleModal(event)} />
</MainContainer>

{#if showModal}
	<Modal on:close={() => toggleModal()} />
{/if}
