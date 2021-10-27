<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import EventCard from '../components/EventCard.svelte';
	import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text/index';
</script>

<svelte:head>
	<title>Sextou!</title>
</svelte:head>

<section id="header">
	<div class="container no-padding">
		<img class="logo" src="sextou_kv.png" />

		<div class="search-block mdc-elevation--z24">
			<Textfield class="mdc-elevation--z1" variant="filled" value="" label="Procure um evento...">
				<!-- <HelperText persistent slot="helper">Ex: Artista no Circo</HelperText> -->
			</Textfield>
		</div>
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
		width: 80vw;
    height: 100px;
    border-radius: 40px;
    margin: 0 auto;
		padding: 15px 30px;
		position: absolute;
		bottom: -50px;
	}

	#main {
		width: 100%;
	}
</style>
