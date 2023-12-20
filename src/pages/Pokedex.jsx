import { useSelector } from "react-redux";
import PokemonList from "../components/PokemonList";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";

const Pokedex = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonTypes, setPokemonTypes] = useState([]);

  const trainerName = useSelector((store) => store.trainerName.name);

  const pokemonsByName = allPokemons.filter((pokemon) =>
    pokemon.name.includes(pokemonName)
  );
  // console.log(pokemonsByName);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemonName(e.target.pokemonName.value.toLowerCase().trim());
  };

  const handleChangeType = (e) => {
    const url = e.target.value;
    // console.log(e.target.value);
    axios
      .get(url)
      .then(({ data }) => {
        if (url.includes("type")) {
          const pokemonsFormat = data.pokemon.map((pokemon) => pokemon.pokemon);
          setAllPokemons(pokemonsFormat);
        } else {
          setAllPokemons(data.results);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1291")
      .then(({ data }) => setAllPokemons(data.results))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then(({ data }) => setPokemonTypes(data.results))
      .catch((error) => console.log(error));
  }, []);
  return (
    <section className="w-[90vw]">
      <Header/>
      <p className="text-start py-8 mt-[90px]">
        <b className="text-[#FE1936]">Welcome {trainerName}</b>, here you will
        find your favorite pokemon
      </p>
      <form
        className="flex flex-wrap gap-8 justify-center sm:justify-start"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            className="w-full shadow-lg h-[60px] p-4 sm:w-[250px]"
            name="pokemonName"
            type="text"
            placeholder="Search a pokemon"
          />
          <button
            className="bg-[#D93F3F] text-white font-semibold text-lg py-4 px-16 w-full sm:w-[190px]"
            type="submit"
          >
            Search
          </button>
        </div>
        <select className="w-[300px] p-4" onChange={handleChangeType}>
          <option value="https://pokeapi.co/api/v2/pokemon?limit=1291">
            all pokemons
          </option>
          {pokemonTypes.map((type) => (
            <option key={type.name} value={type.url}>
              {type.name}
            </option>
          ))}
        </select>
      </form>
      <PokemonList pokemons={pokemonsByName} />
    </section>
  );
};
export default Pokedex;
