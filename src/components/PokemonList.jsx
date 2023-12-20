import { useState } from "react";
import { paginatePokemons } from "../utils/pagination";
import Pagination from "./Pagination";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { pokemonsInCurrentPage, lastPage, pagesInCurrentBlock } =
    paginatePokemons(pokemons, currentPage);
  return (
    <section>
      <section className="grid grid-cols-[repeat(auto-fill,280px)] justify-center mx-auto gap-6 py-10">
        {pokemonsInCurrentPage.map((pokemon) => (
          <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />
        ))}
      </section>
      <Pagination lastPage={lastPage} pagesInCurrentBlock={pagesInCurrentBlock} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </section>
  );
};
export default PokemonList;
