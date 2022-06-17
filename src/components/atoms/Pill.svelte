<script lang="ts">
	export let highlight = false;
	export let bg = 'hover:bg-orange-600/10';
	export let color = 'text-orange-500';
</script>

<button class="button-pill {bg} {color}" class:highlight on:click><slot /></button>

<style lang="postcss">
	.button-pill {
		@apply rounded-md px-3 py-1 font-bold uppercase;

		&.highlight {
			@apply hover:bg-amber-900/20 text-amber-500;
		}
	}
</style>
