<script lang="ts">
	import Icon from '@iconify/svelte';

	export let highlight = false;
	export let bg = 'bg-orange-600';
	export let color = 'text-white';
	export let style = '';
</script>

<div class="button-default" class:highlight on:click>
	<button class="flex justify-center items-center {bg} {color} {style}">
		<slot />
	</button>
</div>

<style lang="postcss">
	.button-shadow {
		@apply shadow-sm shadow-black;
	}
	.button-default {
		button {
			@apply w-full rounded-md button-shadow p-3 xl:p-3 font-bold uppercase tracking-widest;
		}

		&.highlight button {
			@apply bg-amber-500;
		}
	}
</style>
