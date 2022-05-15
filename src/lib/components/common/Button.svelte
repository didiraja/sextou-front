<script lang="ts">
	import Icon from '@iconify/svelte';

	export let highlight = false;
	export let bg = 'bg-orange-600';
	export let color = 'text-white';
</script>

<div class="button-default" class:highlight>
	<button class="flex justify-center items-center {bg} {color}">
		<slot />
	</button>
</div>

<style lang="postcss">
	.button-shadow {
		@apply shadow-sm shadow-black;
	}
	.button-default {
		button {
			@apply font-black uppercase tracking-widest p-3 rounded-md w-full button-shadow;
		}

		&.highlight button {
			@apply bg-amber-500;
		}
	}
</style>
