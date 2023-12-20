import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { colorByType, gradientsByType } from "../constants/pokemon";
const PokemonDetail = () => {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  // console.log(pokemonInfo);
  const { id } = useParams();

  const getPercentBarStat = (statValue) => {
    const percentage = (statValue * 100) / 255;
    return percentage + "%";
  };

  const setBgColor = (type) => {
    const colorString = colorByType[type]
    return colorString.substring(1, colorString.length - 1)
  }

  // console.log(getPercentBarStat(65));
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(({ data }) => setPokemonInfo(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="w-[90vw] bg-white">
      <Header />
      <article className="text-center max-w-[700px] mx-auto mt-[90px] pb-10">
        <div className="h-[150px] bg-white"></div>
        <div className={`bg-gradient-to-b relative h-[150px] ${gradientsByType[pokemonInfo?.types[0].type.name]}`}>
          <img
            className="absolute top-0 -translate-y-[45%] left-1/2 -translate-x-1/2 w-[280px]"
            src={pokemonInfo?.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </div>
        <span className="block my-4"># {pokemonInfo?.id}</span>
        <div className="relative">
          <hr />
          <h3 className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 capitalize bg-white px-2">
            {pokemonInfo?.name}
          </h3>
        </div>
        <section>
          <div className="flex mt-4 justify-center gap-10">
            <div>
              <h5>Weight</h5>
              <span className="font-semibold">{pokemonInfo?.weight}</span>
            </div>
            <div>
              <h5>Heigth</h5>
              <span className="font-semibold">{pokemonInfo?.height}</span>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <div>
              <h4 className="font-semibold">Type</h4>
              <ul className="flex flex-wrap gap-4 justify-center">
                {pokemonInfo?.types.map((type) => (
                  <li style={{
                    backgroundColor: setBgColor(type.type.name)
                  }} className={`capitalize w-[100px] font-semibold text-white`} key={type.type.name}>
                    {type.type.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Abilities</h4>
              <ul className="flex flex-wrap gap-4 justify-center">
                {pokemonInfo?.abilities.map((ability) => (
                  <li className="capitalize w-[100px] border-[1px]" key={ability.ability.name}>
                    {ability.ability.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="w-[90%] mx-auto">
          <h4 className="text-start font-bold">Stats</h4>
          <ul>
            {pokemonInfo?.stats.map((stat) => (
              <li key={stat.stat.name}>
                <div className="flex justify-between">
                  <h5 className="uppercase">{stat.stat.name}</h5>
                  <span>{stat.base_stat}/255</span>
                </div>
                {/* contenedor barra de progreso */}
                <div className="h-6 bg-[#F6F6F6] rounded-sm overflow-hidden">
                  <div
                    style={{
                      width: getPercentBarStat(stat.base_stat),
                    }}
                    className="h-full bg-gradient-to-r from-[#FCD676] to-[#E6901E]"
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </section>
  );
};
export default PokemonDetail;
