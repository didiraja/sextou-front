<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import EventCard from '../components/EventCard.svelte';
</script>

<svelte:head>
	<title>Sextou!</title>
</svelte:head>

<section id="header">
	<div class="container no-padding">
		<img class="logo" src="sextou_kv.png" />
	</div>

</section>

<section>
	<div class="container">
		<div class="search-block" />
	</div>

</section>

<section id="main">
	<div class="container" style="display: flex; justify-content: space-evenly;">
			<EventCard
			highlight
			eventTitle="Evento Destaque"
			eventPlace={['Zona Oeste','Barra']}
			/>

			<EventCard
			highlight
			eventTitle="Evento Destaque 2 ultra power"
			eventPlace={['Zona Oeste','Recreio']}
			/>
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

		margin-bottom: 100px;
	}

	.logo {
		margin: 0 auto;
    display: block;
    padding: 100px 0;
	}

	.search-block {
		background: #eff;
		width: 100%;
		height: 100px;
		border-radius: 10px;
	}

	#main {
		width: 100%;
	}
</style>
