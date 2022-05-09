<div class="card">
  <img class="card-cover" src="http://placeimg.com/320/240/tech" alt="">
  <div class="card-date">Sexta, 5 de Novembro</div>
  <div class="card-title">Festa no lugar X</div>
  <div class="card-tags">
    <button>Centro</button>
    <button>Lapa</button>
  </div>
  <div class="card-bottom">
    <button>Comprar Ingressos</button>
  </div>
</div>

<style type="text/postcss">
  .card {
    @apply backdrop-blur-md bg-white/5 rounded-lg p-5 divide-y-[15px] divide-transparent;
  }
  
  .card-cover {
    @apply w-full rounded-lg;
  }

  .card-date {
    @apply text-xl text-white;
  }

  .card-title {
    @apply text-3xl font-bold text-white;
  }

  .card-tags button {
    @apply hover:bg-amber-900/30 rounded-md px-3 py-1 font-bold text-amber-500 uppercase;
  }

  .card-bottom button {
    @apply bg-amber-500	text-white p-3 rounded-md w-full;
  }
</style>

