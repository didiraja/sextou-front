<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import EventCard from '../components/EventCard.svelte';
	import SearchBlock from '../components/SearchBlock.svelte';
	import Button, { Label } from '@smui/button';
	import Paper, { Title, Subtitle, Content } from '@smui/paper';

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
				<Paper class="event-modal">
					<Title>Paper</Title>
					<Subtitle>This is a sheet of paper.</Subtitle>
					<Content>Paper is used to build an elevated surface.</Content>
				</Paper>
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

	:global(.event-modal) {
		position: fixed;
    min-width: 800px;
    top: 30px;
		z-index: 9;
		// Elevation 24
		box-shadow: 0px 11px 15px -7px rgba(#E0E1DD, 0.2),
		0px 24px 38px 3px rgba(#E0E1DD, 0.12),
		0px 9px 46px 8px rgba(#E0E1DD, 0.12);
	}
</style>
