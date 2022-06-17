<div class="card-grid">
	<slot />
</div>

<style lang="postcss">
	.card-grid {
		@apply mb-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6;
	}
</style>
