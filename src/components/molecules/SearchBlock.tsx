// @ts-nocheck

/**
 * @description Commented because still lacks React syntax
 */

// const SearchBlock = () => {
//   return (
//     <div className="search-block material-shadow">
// 	{#if showErrorMsg}
// 		<div className="error-wrapper" on:click={() => toggleErrorBox()}>
// 			<Icon className="inline-block text-2xl mr" icon="material-symbols:error" color="white" />
// 			<p className="error-msg">A data de Fim precisa vir DEPOIS da data de Início</p>
// 		</div>
// 	{/if}

// 	<div className="grid-wrapper">
// 		<input
// 			className="input-styling"
// 			class:inputError={showErrorMsg}
// 			type="date"
// 			bind:value={startDate}
// 		/>

// 		<input className="input-styling" class:inputError={showErrorMsg} type="date" bind:value={endDate} />

// 		<select id="zone" className="input-styling" bind:value={zoneSelected}>
// 			<option value={null}>Todos as regiões</option>
// 			{#each Zones as zone}
// 				<option value={zone.id}>{zone.name}</option>
// 			{/each}
// 		</select>

// 		<select id="neighborhood" className="input-styling" bind:value={neighborhoodSelected}>
// 			<option value={null}>Todos os bairros</option>
// 			{#each Neighborhoods as neighborhood}
// 				<option value={neighborhood.id}>{neighborhood.name}</option>
// 			{/each}
// 		</select>

// 		<select id="music" className="input-styling" bind:value={musicSelected}>
// 			<option value={null}>Todos os sons</option>
// 			<option>Rock</option>
// 			<option>Hip-hop</option>
// 			<option>Funk</option>
// 			<option>EDM</option>
// 		</select>

// 		<div className="col-span-full md:col-auto">
// 			<Button
// 				style="!rounded-none p-2 md:text-sm xl:text-xs"
// 				on:click={() =>
// 					validateSearch({
// 						startDate,
// 						endDate,
// 						zoneSelected,
// 						neighborhoodSelected,
// 						musicSelected
// 					})}
// 			>
// 				<Icon className="mr-1 text-2xl" icon="material-symbols:search-rounded" /> Buscar Evento
// 			</Button>
// 		</div>
// 	</div>
// </div>
//   );
// }

// export default SearchBlock;
