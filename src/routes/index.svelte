<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import EventCard from '../components/EventCard.svelte';
</script>

<svelte:head>
	<title>Sextou!</title>
</svelte:head>

<section>
	<div class="container">
		<img class="logo" src="sextou_kv.png" />
	</div>

</section>

<section id="main">
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
	.logo {
		margin: 50px auto;
		display: block;
		width: 500px;
	}

	#main {
		width: 100%;
	}
</style>
