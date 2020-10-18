import React from "react";
import Pokecard from "./Pokecard";
import Pokedex from "./Pokedex";
import { pokeDB } from "./data";

class App extends React.Component {
  render() {
    const pokemon = pokeDB[1];

    return (
      <div>
        <Pokedex>
          {pokeDB.map((pokemon) => {
            return (
              <Pokecard
                name={pokemon.name}
                id={pokemon.id}
                type={pokemon.type}
                baseexp={pokemon.base_experience}
              />
            );
          })}
        </Pokedex>
      </div>
    );
  }
}

export default App;
