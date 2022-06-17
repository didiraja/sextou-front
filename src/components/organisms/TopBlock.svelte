<script lang="ts">
	import Header from '../molecules/Header.svelte';
	import SearchBlock from '../molecules/SearchBlock.svelte';
</script>

<Header />

<section id="top" class="grid grid-cols-1">
	<img class="sextou-logo" src="/sextou_kv.png" alt="Sextou!" />

	<SearchBlock />
</section>

<style lang="postcss">
	.sextou-logo {
		@apply mx-auto mt-20 px-3 xl:mt-32;
	}
</style>
