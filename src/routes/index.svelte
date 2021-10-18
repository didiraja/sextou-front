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

<style>
	* {
		color: white;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}
</style>
