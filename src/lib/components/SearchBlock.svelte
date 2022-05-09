<div class="search-block">
  <input class="input-styling" type="text" placeholder="início">
  <input class="input-styling" type="text" placeholder="fim">
  <input class="input-styling" type="text" placeholder="região">
  <input class="input-styling" type="text" placeholder="bairro">
  <input class="input-styling" type="text" placeholder="música">
  <button class="btn-search">Buscar Evento</button>
</div>

<style type="text/postcss">
  .search-block {
    @apply backdrop-blur-md bg-white/10 w-10/12 mx-auto mt-16 mb-8 px-5 py-4 rounded-xl shadow-xl grid grid-cols-6 gap-x-2;
  }

  .input-styling {
	  @apply bg-black/30 rounded-sm shadow-md shadow-slate-300/10 pl-3 text-white;
  }

  .btn-search {
    @apply bg-orange-600 font-bold text-white uppercase px-3 py-3 rounded-sm shadow-md;
  }
</style>