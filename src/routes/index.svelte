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
	<div class="container">

		<div class="event-card">
			<Card>
				<Content>
					<p class="event-title mdc-typography--headline4">BK no Circo Voador</p>
					<p class="event-date">11 de Dezembro</p>
					<img class="event-cover img-fluid" src="https://loremflickr.com/420/340" />
				</Content>
				<Actions>
					<Button>
						<Label>Centro</Label>
					</Button>
					<Button>
						<Label>Lapa</Label>
					</Button>
				</Actions>

				<Actions>
					<Button variant="unelevated">
						<Icon class="material-icons">bookmark_border</Icon>
						<Label>Comprar Ingressos</Label>
					</Button>
				</Actions>
			</Card>

			<Card>
				<Content>
					<p class="event-title mdc-typography--headline4">BK no Circo Voador</p>
					<p class="event-date">11 de Dezembro</p>
					<img class="event-cover img-fluid" src="https://loremflickr.com/420/340" />
				</Content>
				<Actions>
					<Button>
						<Label>Centro</Label>
					</Button>
					<Button>
						<Label>Lapa</Label>
					</Button>
				</Actions>

				<Actions>
					<Button variant="unelevated">
						<Icon class="material-icons">bookmark_border</Icon>
						<Label>Comprar Ingressos</Label>
					</Button>
				</Actions>
			</Card>
			<Card>
				<Content>
					<p class="event-title mdc-typography--headline4">BK no Circo Voador</p>
					<p class="event-date">11 de Dezembro</p>
					<img class="event-cover img-fluid" src="https://loremflickr.com/420/340" />
				</Content>
				<Actions>
					<Button>
						<Label>Centro</Label>
					</Button>
					<Button>
						<Label>Lapa</Label>
					</Button>
				</Actions>

				<Actions>
					<Button variant="unelevated">
						<Icon class="material-icons">bookmark_border</Icon>
						<Label>Comprar Ingressos</Label>
					</Button>
				</Actions>
			</Card>

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

	.flex-between {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.container {
		width: 100%;
		border: 1px dotted red;
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
			// width: 360px;
			display: flex;
    	align-items: center;
			margin-bottom: 30px;
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
			font-weight: 500;
			display: block;
		}

		.event-date {
			display: block;
			color: #E0E1DD;
			font-size: 20px;
			margin: 0px 0 20px;
		}

		.tag {
			padding: 0;

			.item {
				color: #E0E1DD;
				padding: 5px 10px;
				border: 2px solid #89D2DC;
				border-radius: 50px;
				margin-right: 10px;
				font-size: 18px;

				&:hover {			
		    	background-color: #89D2DC;
					cursor: pointer;
				}
			}
		}
	}
</style>
