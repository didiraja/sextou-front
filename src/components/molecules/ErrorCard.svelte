<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div class="bg-slate-800 rounded-lg w-full x-auto md:ml-6 lg:ml-16 p-5 text-white font-bold flex">
	<Icon class="mr-2 text-2xl" icon="material-symbols:error-rounded" />
	<p><slot /></p>
</div>

<style lang="postcss">
</style>
