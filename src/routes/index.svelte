<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import SearchBlock from '../components/SearchBlock.svelte';
	import EventCard from '../components/EventCard.svelte';
	import EventModal from '../components/EventModal.svelte';
	import Button, { Label, Icon } from '@smui/button';
	
	export let showEvent = true;
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
	<div class="container" style="display: flex; justify-content: space-evenly;">
		
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

	<div class="container no-padding container-flex">
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
    padding: 50px 0 100px;
	}

	#main {
		width: 100%;
	}
</style>
