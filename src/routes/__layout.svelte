<script lang="ts">
	import Layout from '../components/templates/index.svelte';
	import '@fontsource/montserrat/latin.css';
	import '@fontsource/raleway/latin.css';
	import PageContainer from '../components/templates/PageContainer.svelte';
	import TopBlock from '../components/organisms/TopBlock.svelte';
	import Footer from '../components/molecules/Footer.svelte';
	import Modal from '../components/molecules/Modal.svelte';
	import { toggleModal } from '../lib/utils.js';
	import { appConfig } from '../store.js';
	import '../lib/styles/app.css';
</script>

<Layout>
	<PageContainer>
		<TopBlock />

		<slot />

		<Footer />

		{#if $appConfig.showModal}
			<Modal on:close={() => toggleModal()} />
		{/if}
	</PageContainer>
</Layout>
