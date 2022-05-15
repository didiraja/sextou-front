<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div class="card" on:click>
  <img class="card-cover" src="http://placeimg.com/320/240/tech" alt="">
  <div class="card-date">Sexta, 5 de Novembro</div>
  <div class="card-title">Festa no lugar X</div>
  <div class="button-pills">
    <button>Centro</button>
    <button>Lapa</button>
  </div>
  <div class="button-default">
    <button class="flex justify-center items-center">
      <Icon class="mr-1 text-2xl" icon="material-symbols:airplane-ticket-rounded" /> Comprar Ingressos
    </button>
  </div>
</div>

<style lang="postcss">
  .card {
    @apply backdrop-blur-md bg-white/5 rounded-lg p-5 divide-y-[15px] divide-transparent;

    .card-cover {
      @apply w-full rounded-lg;
    }

    .card-date {
      @apply text-xl text-white;
    }

    .card-title {
      @apply text-3xl font-bold text-white;
    }
  }
</style>

