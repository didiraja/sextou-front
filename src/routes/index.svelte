<script lang="ts">
	import MainContainer from '../components/templates/MainContainer.svelte';
	import HomeCards from '../components/organisms/HomeCards.svelte';
	// import { isAPIOnline } from '../lib/requests/index.js';
	// import { appConfig } from '../store.js';
	// import { get } from 'svelte/store';
</script>

<svelte:head>
	<title>Sextou - Beta!</title>
</svelte:head>

<MainContainer>
	<HomeCards />
</MainContainer>
