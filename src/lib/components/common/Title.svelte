<script lang="ts">

  export let text = 'Lorem Ipsum';
  export let highlight = false;
</script>


<h1 class="section-title border-orange-600" class:highlight>{text}</h1>

<style lang="postcss">
	.section-title {
		@apply ml-8 mb-8 pl-5 -skew-x-10 border-l-[15px] font-black text-white text-5xl;

    &.highlight {
      @apply border-amber-400;
    }
	}
</style>