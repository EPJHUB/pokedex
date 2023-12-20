const paginatePokemons = (pokemons, currentPage) => {
  // Cantidad de pokemons por pagina
  const POKEMONS_PER_PAGE = 20;
  // Pokemons que se renderizan en la pagina actual
  const sliceEnd = currentPage * POKEMONS_PER_PAGE;
  const sliceStart = sliceEnd - POKEMONS_PER_PAGE;
  const pokemonsInCurrentPage = pokemons.slice(sliceStart, sliceEnd);
  //Cantidad de paginas o ultima pagina
  const lastPage = Math.ceil(pokemons.length / POKEMONS_PER_PAGE);
  const PAGES_PER_BLOCK = 7;
  // Bloque actual
  const currentBlock = Math.ceil(currentPage / PAGES_PER_BLOCK);
  //Paginas que se van a mostrar en el bloque actual
  const pagesInCurrentBlock = [];
  const lastBlockPage = currentBlock * PAGES_PER_BLOCK;
  const firstBlockPage = lastBlockPage - PAGES_PER_BLOCK + 1;
  for (
    let page = firstBlockPage;
    page <= Math.min(lastBlockPage, lastPage);
    page++
  ) {
    pagesInCurrentBlock.push(page);
  }
  return {
    pokemonsInCurrentPage,
    lastPage,
    pagesInCurrentBlock,
  }
};


export { paginatePokemons };
