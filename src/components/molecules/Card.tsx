<div class="card">
	<span class="hover:cursor-pointer" on:click>
		<img class="card-cover" src={Cover} alt="" />
		<div class="card-date">{readableDate(event.Date)}</div>
		<div class="card-title">{event.Title}</div>
	</span>

	<div class="card-meta">
		{#if Zone}
			<Pill {highlight} on:click={() => goto(`/zone/${event.Zone.id}`)}>
				{Zone}
			</Pill>
		{/if}

		{#if Neighborhood}
			<Pill {highlight} on:click={() => goto(`/neighborhoods/${event.Neighborhood.id}`)}>
				{Neighborhood}
			</Pill>
		{/if}

		{#if Music}
			<Pill {highlight} on:click={() => goto(`/music/${event.Music.id}`)}>
				{Music}
			</Pill>
		{/if}
	</div>

	<div class="card-bottom">
		<Button {highlight} on:click={() => alert('new tab | pagina de ingresso')}>
			<Icon class="mr-1 text-2xl" icon="material-symbols:airplane-ticket-rounded" /> Comprar Ingressos
		</Button>
	</div>
</div>