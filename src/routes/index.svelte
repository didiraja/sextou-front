<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import Button, { Label, Icon } from '@smui/button';
	import Card, {
    Content,
    PrimaryAction,
    Actions,
    Media,
    MediaContent,
  } from '@smui/card';
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

		<!-- <img class="event-cover img-fluid" src="https://loremflickr.com/420/340" /> -->

			<!-- <div class="title-date-block">	
				<p class="event-title mdc-typography--headline4">BK no Circo Voador</p>
				<p class="event-date">11 de Dezembro</p>

				<div class="tag">
					

					<br/>

					
					<ul>
						<li class="item">Centro</li>
						<li class="item">Lapa</li>
					</ul> 
				</div>
			</div> -->

		<div class="event-card">
			<Card>
				<Content>
					<p class="event-title mdc-typography--headline4">BK no Circo Voador</p>
					<p class="event-date">11 de Dezembro</p>
					<img class="event-cover img-fluid" src="https://loremflickr.com/420/340" />
				</Content>
				<Actions class="card-action--no-padding">
					<Button>
						<Label>Centro</Label>
					</Button>
					<Button>
						<Label>Lapa</Label>
					</Button>
				</Actions>

				<Actions class="card-action-bottom">
					<Button variant="unelevated">
						<Icon class="material-icons">bookmark_border</Icon>
						<Label>Comprar Ingressos</Label>
					</Button>
				</Actions>
			</Card>
		</div>

		<div class="event-card">
			<Card>
				<Content>
					<p class="event-title mdc-typography--headline4">Outro Evento</p>
					<p class="event-date">11 de Dezembro</p>
					<img class="event-cover img-fluid" src="https://loremflickr.com/420/340" />
				</Content>
				<Actions class="card-action--no-padding">
					<Button>
						<Label>Zona Norte</Label>
					</Button>
					<Button>
						<Label>Irajá</Label>
					</Button>
				</Actions>

				<Actions class="card-action-bottom">
					<Button variant="unelevated">
						<Icon class="material-icons">bookmark_border</Icon>
						<Label>Comprar Ingressos</Label>
					</Button>
				</Actions>
			</Card>
		</div>

		<div class="event-card">
			<Card>
				<Content>
					<p class="event-title mdc-typography--headline4">Outro Evento</p>
					<p class="event-date">11 de Dezembro</p>
					<img class="event-cover img-fluid" src="https://loremflickr.com/420/340" />
				</Content>
				<Actions class="card-action--no-padding">
					<Button>
						<Label>Zona Sul</Label>
					</Button>
					<Button>
						<Label>Copacabana</Label>
					</Button>
				</Actions>

				<Actions class="card-action-bottom">
					<Button variant="unelevated">
						<Icon class="material-icons">bookmark_border</Icon>
						<Label>Comprar Ingressos</Label>
					</Button>
				</Actions>
			</Card>
		</div>

		<div class="event-card">
			<Card>
				<Content>
					<p class="event-title mdc-typography--headline4">BK no Circo Voador</p>
					<p class="event-date">11 de Dezembro</p>
					<img class="event-cover img-fluid" src="https://loremflickr.com/420/340" />
				</Content>
				<Actions class="card-action--no-padding">
					<Button>
						<Label>Baixada</Label>
					</Button>
					<Button>
						<Label>Caxias</Label>
					</Button>
				</Actions>

				<Actions class="card-action-bottom">
					<Button variant="unelevated">
						<Icon class="material-icons">bookmark_border</Icon>
						<Label>Comprar Ingressos</Label>
					</Button>
				</Actions>
			</Card>
		</div>

		<div class="event-card">
			<Card>
				<Content>
					<p class="event-title mdc-typography--headline4">Outro Evento</p>
					<p class="event-date">11 de Dezembro</p>
					<img class="event-cover img-fluid" src="https://loremflickr.com/420/340" />
				</Content>
				<Actions class="card-action--no-padding">
					<Button>
						<Label>Centro</Label>
					</Button>
					<Button>
						<Label>Lapa</Label>
					</Button>
				</Actions>

				<Actions class="card-action-bottom">
					<Button variant="unelevated">
						<Icon class="material-icons">bookmark_border</Icon>
						<Label>Comprar Ingressos</Label>
					</Button>
				</Actions>
			</Card>
		</div>

		<div class="event-card">
			<Card>
				<Content>
					<p class="event-title mdc-typography--headline4">Outro Evento</p>
					<p class="event-date">11 de Dezembro</p>
					<img class="event-cover img-fluid" src="https://loremflickr.com/420/340" />
				</Content>
				<Actions class="card-action--no-padding">
					<Button>
						<Label>Centro</Label>
					</Button>
					<Button>
						<Label>Lapa</Label>
					</Button>
				</Actions>

				<Actions class="card-action-bottom">
					<Button variant="unelevated">
						<Icon class="material-icons">bookmark_border</Icon>
						<Label>Comprar Ingressos</Label>
					</Button>
				</Actions>
			</Card>
		</div>
		
	</div>
</section>

<style lang="scss">

	// Reset
	* {
		box-sizing: border-box;
	}

	p {
		line-height: initial;
		margin: 0;
	}

	section {
		width: 100%;
	}

	h1 {
		width: 100%;
	}

	ul {
		margin: 0;
    padding: 0;
	}

	li {
		display: inline-block;
	}

	// Utils
	.img-fluid {
		max-width: 100%;
	}

	.no-padding {
		padding: 0;
	}
	
	.container {
		width: 100%;
		// border: 1px dotted red;
	}
	
	.container-flex {
		display: flex;
		justify-content: space-between;
		align-items: start;
		flex-wrap: wrap;
	}
	
	// App
	.logo {
		margin: 50px auto;
		display: block;
		width: 500px;
	}

	#main {
		width: 100%;

		.event-card {
			position: relative;
			display: flex;
    	align-items: center;
			margin-bottom: 30px;
			width: 32%;

			:global(.card-action--no-padding) {
				padding: 0 8px;
			}

			:global(.mdc-card__actions) {
				min-height: 1px;
			}

			:global(.card-action-bottom) {
				padding-bottom: 16px;
			}
		}

		.event-cover {
			border-radius: 25px;
			width:300px;
			display: inline-block;
		}

		.title-date-block {
			width: 100%;
			height: 100%;
			display: inline-block;
			border-radius: 10px;
			// margin-left: -50px;
			padding: 20px 15px;

			// background-color: #778DA9;
			background: rgb(65,90,119);
			background: linear-gradient(0deg, rgba(13,27,42,1) 0%, rgba(65,90,119,1) 43%);
		}

		.event-title {
			color: #E0E1DD;
			font-size: 30px;
			font-weight: 500;
			display: block;
		}

		.event-date {
			display: block;
			color: #E0E1DD;
			font-size: 18px;
			margin: 0px 0 20px;
		}

	}
</style>
