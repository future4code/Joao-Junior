import React, { useState, useEffect } from "react"
import axios from 'axios'


export const PokerCard = () => {

const [pokemon, setpokemon] = useState({})

useEffect (() => {
  pegaPokemon(pokemon)

}, [pokemon])

const pegaPokemon = pokeName => {
  axios
  .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
  .then(response => {
    setpokemon(response.data)
  })
  .catch(err => {
    console.log("Deu erro")
  })
}

const creature = pokemon

return (
  <div>
<p>{creature.name}</p>
<p>{creature.weight}</p>
{creature.type && <p>{creature.types[0].type.name}</p>}
{creature.sprites && (
  <img src={creature.sprites.front_default} alt={creature.name} />
  )}
<p>{creature.name}</p>
  </div>
)

}