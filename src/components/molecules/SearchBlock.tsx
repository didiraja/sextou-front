// @ts-nocheck
const SearchBlock = () => {
  return (
    <div class="search-block material-shadow">
	{#if showErrorMsg}
		<div class="error-wrapper" on:click={() => toggleErrorBox()}>
			<Icon class="inline-block text-2xl mr" icon="material-symbols:error" color="white" />
			<p class="error-msg">A data de Fim precisa vir DEPOIS da data de Início</p>
		</div>
	{/if}

	<div class="grid-wrapper">
		<input
			class="input-styling"
			class:inputError={showErrorMsg}
			type="date"
			bind:value={startDate}
		/>

		<input class="input-styling" class:inputError={showErrorMsg} type="date" bind:value={endDate} />

		<select id="zone" class="input-styling" bind:value={zoneSelected}>
			<option value={null}>Todos as regiões</option>
			{#each Zones as zone}
				<option value={zone.id}>{zone.name}</option>
			{/each}
		</select>

		<select id="neighborhood" class="input-styling" bind:value={neighborhoodSelected}>
			<option value={null}>Todos os bairros</option>
			{#each Neighborhoods as neighborhood}
				<option value={neighborhood.id}>{neighborhood.name}</option>
			{/each}
		</select>

		<select id="music" class="input-styling" bind:value={musicSelected}>
			<option value={null}>Todos os sons</option>
			<option>Rock</option>
			<option>Hip-hop</option>
			<option>Funk</option>
			<option>EDM</option>
		</select>

		<div class="col-span-full md:col-auto">
			<Button
				style="!rounded-none p-2 md:text-sm xl:text-xs"
				on:click={() =>
					validateSearch({
						startDate,
						endDate,
						zoneSelected,
						neighborhoodSelected,
						musicSelected
					})}
			>
				<Icon class="mr-1 text-2xl" icon="material-symbols:search-rounded" /> Buscar Evento
			</Button>
		</div>
	</div>
</div>
  );
}
 
export default SearchBlock;