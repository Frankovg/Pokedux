import React from "react";
import { PokemonCard } from "./PokemonCard";
import "./pokemonlist.css";

export const PokemonList = ({
  pokemons,
  searchedPokemons,
  valueImputSearch,
}) => {
  if (valueImputSearch.length > 1 && searchedPokemons.length < 1) {
    return (
      <div>
        <span>Nothing found, try searching again.</span>
      </div>
    );
  }
  if (searchedPokemons.length > 0) {
    return (
      <div>
        {searchedPokemons.map((pokemon) => {
          return (
            <PokemonCard
              name={pokemon.data.name}
              key={pokemon.data.name}
              image={pokemon.data.sprites.front_default}
              types={pokemon.data.types}
              id={pokemon.data.id}
              favorite={pokemon.favorite}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            name={pokemon.data.name}
            key={pokemon.data.name}
            image={pokemon.data.sprites.front_default}
            types={pokemon.data.types}
            id={pokemon.data.id}
            favorite={pokemon.favorite}
          />
        );
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};
