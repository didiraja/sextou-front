<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import EventCard from '../components/EventCard.svelte';
	import Button, { Label } from '@smui/button';
	import Textfield from '@smui/textfield';
	import IconText from '@smui/textfield/icon';
  import HelperText from '@smui/textfield/helper-text/index';
	import Select, { Option } from '@smui/select';
  import IconSelect from '@smui/select/icon';
</script>

<svelte:head>
	<title>Sextou!</title>
</svelte:head>

<section id="header">
	<div class="container no-padding">
		<img class="logo" src="sextou_kv.png" />

		<div class="search-block mdc-elevation--z24">
			<Textfield label="Início" value="" variant="filled" class="mdc-elevation--z1">
				<IconText class="material-icons" slot="leadingIcon">event</IconText>
			</Textfield>

			<Textfield label="Fim" value="" variant="filled" class="mdc-elevation--z1">
				<IconText class="material-icons" slot="leadingIcon">event</IconText>
			</Textfield>

			<Select label="Região" value="" variant="filled" class="mdc-elevation--z1">
				<IconSelect class="material-icons" slot="leadingIcon">event</IconSelect>
				<Option value="" />
				<Option value="zn">Zona Norte</Option>
				<Option value="zs">Zona Sul</Option>
				<Option value="zo">Zona Oeste</Option>
			</Select>

			<Select label="Bairro" value="" variant="filled" class="mdc-elevation--z1">
				<IconSelect class="material-icons" slot="leadingIcon">event</IconSelect>
				<Option value="" />
				<Option value="lapa">Lapa</Option>
				<Option value="botafogo">Botafogo</Option>
				<Option value="iraja">Irajá</Option>
				<Option value="meier">Méier</Option>
			</Select>

			<Button variant="raised">
				<Label>Buscar</Label>
			</Button>
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

		margin-bottom: 50px;
	}

	.logo {
		margin: 0 auto;
    display: block;
    padding: 50px 0 100px;
	}

	.search-block {
		background: #eff;
		background: linear-gradient(0deg, #a8a8a8 0%, #f7f7f8 100%);
		// width: 80vw;
		width: 100%;
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
