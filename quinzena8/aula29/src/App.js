import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PokerCard from "./components/PokeCard/index";

export default function App() {
  const [lista, setLista] = useState([]);
  const [pokeName, setpokeName] = useState("");

  const pegarLista = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((resp) => {
        setLista(resp.data.results);
        console.log(resp);
      })
      .catch((err) => {
        console.log(`Deu uma merda ai`);
      });
  };

  useEffect(() => {
    pegarLista();
  }, []);

  const mudaPokeName = (event) => {
    setpokeName(event.target.value);
  };

  return (
    <div className="App">
      <select onChange={mudaPokeName}>
        <option value={""}>escolha um pokemon</option>

        {lista.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {pokeName && <PokerCard pokemon={pokeName} />}
    </div>
  );
}
