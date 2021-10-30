<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import SearchBlock from '../components/SearchBlock.svelte';
	import EventCard from '../components/EventCard.svelte';
	import EventModal from '../components/EventModal.svelte';
	import Button, { Label, Icon } from '@smui/button';
	
	export let showEvent = false;
</script>

<svelte:head>
	<title>Sextou! - beta</title>
</svelte:head>

<section id="header">
	<div class="container no-padding">
		<img class="logo" src="sextou_kv.png" />

		<SearchBlock />
	</div>

</section>

<section id="main">
	<div class="container">
		<p class="section-title">hype da noite</p>
	</div>

	<div class="container container-card">
			<EventCard
				highlight
				eventTitle="Evento Destaque"
				eventPlace={['Zona Oeste','Barra']}
				on:click={() => showEvent = !showEvent}
			/>
			
			<EventCard
				highlight
				eventTitle="Evento Destaque 2 ultra power"
				eventPlace={['Zona Oeste','Recreio']}
			/>
				
			{#if showEvent}
				<EventModal on:close="{() => showEvent = false}" />
			{/if}
		</div>

	<div class="container">
		<p class="section-title" style="border-color: #ff3e00">principais eventos</p>
	</div>

	<!-- no-padding container-flex -->
	<div class="container container-card">
		{#each Array.from(Array(7).keys()) as evento, index}
			<EventCard
				eventTitle={index %2 === 0 ? "Evento Genérico mega power" : "Event Genérico"}
				eventPlace={['Zona Sul','Copacabana']}
			/>
		{/each}
	</div>
</section>


<style lang="scss">
	#header {
		background: url('sextou_banner.jpg') no-repeat;
		background-size: cover;
		background-position: bottom center;

		margin-bottom: 50px;
	}

	.logo {
		margin: 0 auto;
    display: block;
    padding: 2em 0 4em;
		width: 17em;

		// Desktop
    // padding: 50px 0 100px;
	}

	#main {
		width: 100%;
		// search-block compensation
		margin-top: 14em;
	}
	
	// container-highlight (?)
	// Desktop
	// display: flex;
	// justify-content: flex-start;

	.container-card {
		padding: 0 0.3em;

	}

	.section-title {
		color: #E0E1DD;
    font-size: 2em;
    font-weight: bold;
    border-left: 15px solid #ffaa00;
    padding-left: 0.5em;
    width: 90%;
    transform: skew(350deg, 0deg);
    margin-left: 0.7em;
    margin-bottom: 0.6em;

		// Desktop
		// font-size: 60px;
	}
</style>
