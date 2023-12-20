import axios from "axios";
import { useEffect, useState } from "react";
import { colorByType, gradientsByType } from "../constants/pokemon";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    axios
      .get(pokemonUrl)
      .then(({ data }) => setPokemonInfo(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <Link className={`border-8 rounded-lg text-center grid gap-1 border-${colorByType[pokemonInfo?.types[0].type.name]}`} to={`/pokedex/${pokemonInfo?.id}`}>
      <header className={`bg-gradient-to-b relative h-[150px] ${gradientsByType[pokemonInfo?.types[0].type.name]}`}>
        <img
          className="absolute bottom-0 translate-y-[35%] w-full p-10"
          src={pokemonInfo?.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </header>
      <h3 className="capitalize pt-10">{pokemonInfo?.name}</h3>
      <span className="capitalize text-sm font-semibold">
        {pokemonInfo?.types.map((type) => type.type.name).join(" / ")}
      </span>
      <h4 className="text-xs text-slate-400">Types</h4>
      <hr />
      <ul className="grid grid-cols-2 p-2">
        {pokemonInfo?.stats.map((stat) => (
          <li className="grid" key={stat.stat.name}>
            <p className="uppercase text-xs">{stat.stat.name} </p>
            <span className="text-sm font-bold">{stat.base_stat}</span>
          </li>
        ))}
      </ul>
    </Link>
  );
};
export default PokemonCard;
