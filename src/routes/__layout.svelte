<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.scss';
</script>

<!-- <Header /> -->

<main>
	<slot />
</main>

<!-- <footer /> -->

<style>

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
		color: white;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
