import { useDispatch } from "react-redux";
import { setTrainerName } from "../store/slices/trainerName.slice";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.trainerName.value);
    dispatch(setTrainerName(e.target.trainerName.value));
    navigate("/pokedex")
  };
  return (
    <section className="max-w-[700px] mx-auto text-center">
      <header>
        <img src="/img/pokemonTitle.png" alt="" />
      </header>
      <h2 className="text-[#FE1936] font-bold text-[50px]">Hello trainer!!!</h2>
      <p className="text-[#302F2F] text-2xl">Write your name to start...</p>
      <form className="py-10" onSubmit={handleSubmit}>
        <input
          className="w-[calc(90%_-_170px)] shadow-lg h-[60px] p-4"
          name="trainerName"
          type="text"
          placeholder="Enter your name"
          autoComplete="offF"
          required
        />
        <button className="bg-[#D93F3F] text-white font-semibold text-lg py-4 px-16" type="submit">Start</button>
      </form>
      <Footer/>
    </section>
  );
};
export default Home;
