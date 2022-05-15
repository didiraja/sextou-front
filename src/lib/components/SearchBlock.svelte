<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div class="search-block material-shadow">
  <input class="input-styling" type="text" placeholder="início">
  <input class="input-styling" type="text" placeholder="fim">
  <input class="input-styling" type="text" placeholder="região">
  <input class="input-styling" type="text" placeholder="bairro">
  <input class="input-styling" type="text" placeholder="música">
  <button class="btn-search material-shadow">
    <Icon class="mr-1 text-2xl" icon="material-symbols:search-rounded" /> Buscar Evento
  </button>
</div>

<style lang="postcss">
  .search-block {
    @apply backdrop-blur-md bg-white/10 w-10/12 mx-auto mt-16 mb-8 px-5 py-4 rounded-xl grid grid-cols-6 gap-x-2;
  }

  .input-styling {
	  @apply bg-black/30 rounded-sm pl-3 text-white;
    -webkit-box-shadow: inset 0px 0px 15px -2px #000000;
    box-shadow: inset 0px 0px 15px -2px #000000;
  }

  .btn-search {
    @apply bg-orange-600 font-black text-white uppercase py-3 rounded-sm flex justify-center items-center;
  }
</style>