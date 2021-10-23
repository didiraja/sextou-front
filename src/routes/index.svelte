<script context="module">
	export const prerender = true;
</script>

<script>
</script>

<svelte:head>
	<title>Sextou!</title>
</svelte:head>

<section>
	<img src="sextou_kv.png" />

	<br/><br/>

	VEM AÍ, com as melhores opções da noite.
</section>

<section id="main">
	<div class="container flex-between">

		<div class="event-card">
			<img class="event-cover img-fluid" src="http://localhost:1337/uploads/bk_circo_card_0f1c088d4f.jpg" />

			<div class="title-date-cover">	
				<p class="event-title">BK no Circo Voador</p>
				<p class="event-date">11/Dez</p>
			</div>

			<div class="tag">
				<ul>
					<li class="item">Centro</li>
					<li class="item">Lapa</li>
				</ul>
			</div>
		</div>
		
		<div class="event-card">
			<img class="event-cover img-fluid" src="http://localhost:1337/uploads/bk_circo_card_0f1c088d4f.jpg" />

			<div class="title-date-cover">	
				<p class="event-title">BK no Circo Voador</p>
				<p class="event-date">11/Dez</p>
			</div>

			<div class="tag">
				<ul>
					<li class="item">Centro</li>
					<li class="item">Lapa</li>
				</ul>
			</div>
		</div>

		<div class="event-card">
			<img class="event-cover img-fluid" src="http://localhost:1337/uploads/bk_circo_card_0f1c088d4f.jpg" />

			<div class="title-date-cover">	
				<p class="event-title">BK no Circo Voador</p>
				<p class="event-date">11/Dez</p>
			</div>

			<div class="tag">
				<ul>
					<li class="item">Centro</li>
					<li class="item">Lapa</li>
				</ul>
			</div>
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
	
	#main {
		width: 100%;
		background-color: rgb(255 255 255 / 30%);
		// background-color: white;
		padding: 20px;

		.container {
			width: 100%;
		}

		.event-card {
			width: 360px;
			// width: 32%;
			color: black;
			background-color: white;
			border: 5px solid black;
		}

		.title-date-cover {
			border-top: 5px solid black;
			border-bottom: 5px solid black;
			display: flex;
    	align-items: center;
		}

		.event-title {
			color: black;
			font-size: 25px;
			font-weight: bold;

			border-right: 5px solid black;

			display: block;
			width: 75%;
			padding: 5px;
		}
		.event-date {
			display: block;
			width: 25%;

			color: black;
			text-align: center;
			font-size: 20px;
		}

		.tag {
			padding: 10px;

			.item {
				background-color: #232ED1;
				color: #E0E1DD;
				padding: 5px;
				border: 3px solid black;
				margin-right: 20px;
				font-size: 22px;

				&:hover {			
		    	opacity: .8;
				}
			}
		}
	}
</style>
