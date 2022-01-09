<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	
	import SearchBlock from '../components/SearchBlock.svelte';
	import EventCard from '../components/EventCard.svelte';
	import EventModal from '../components/EventModal.svelte';
	import { getEvents } from '../lib/requests.js';

	import Button, { Label, Icon } from '@smui/button';
	
	export let showEvent = false;
	export let events = [];
	
	onMount(() => {
		
		getEvents()
		.then((res) => events = res.data)
		.catch((e) => console.log(e));

	});
</script>

<svelte:head>
	<title>Sextou! - beta</title>
</svelte:head>

<section id="header">
	<div class="container no-padding">
		<img class="logo" src="sextou_kv.png" />
	</div>
	<div class="container no-padding" style="display: flex; justify-content: center;">
		<SearchBlock />
	</div>
</section>
<section id="main">
	<!-- <div class="container">
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
				eventTitle="Evento Destaque 2 ultra power de duas linhas"
				eventPlace={['Zona Oeste','Recreio']}
			/>

			<EventCard
				highlight
				eventTitle="Evento Destaque 2 ultra power de duas linhas"
				eventPlace={['Zona Oeste','Recreio']}
			/>
				
			{#if showEvent}
				<EventModal on:close="{() => showEvent = false}" />
			{/if}
		</div> -->

	<div class="container">
		<p class="section-title" style="border-color: #ff3e00">principais eventos</p>
	</div> 

	<!-- no-padding container-flex -->
	<div class="container container-card">
		{#if events}
			{#each events as event}
				<EventCard
					eventCover={`http://localhost:1337${event.Cover.url}`}
					eventTitle={event.Title}
					eventDate={event.Date}
					eventPlace={[event.Zone.Title]}
				/>
			{/each}
		{/if}
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
	}

	#main {
		width: 100%;
	}

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
	}

	@media (min-width: 768px) {
		.logo {
			width: 35em;
		}

		#main {
			max-width: 75em;
    	margin: 0 auto;
		}

		.section-title {
			font-size: 3em;
		}

		.container-card {
			display: flex;
    	justify-content: space-between;
			flex-wrap: wrap;

			padding: 0 1em;
		}
	}

	@media (min-width: 1300px) {
		.logo {
			padding: 5em 0 6em;
			width: 40em;
		}

		// #main {
		// 	margin-top: 8em;
		// }

		.section-title {
			margin-left: 0.3em;
    	margin-bottom: 0em;
		}
	}
</style>
