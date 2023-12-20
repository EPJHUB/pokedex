import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import PokemonDetail from "./pages/PokemonDetail";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <div className="min-h-screen w-full grid justify-center items-center bg-gray-200">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokemonDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
