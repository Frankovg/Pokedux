import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
  pokemons: [],
  pokemonsSearched: [],
};

export const fetchPokemonWithDetails = createAsyncThunk(
  "data/fetchPokemonsWithDetails",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));

    const pokemonsRes = await getPokemon();
    const pokemonsDetailed = await Promise.all(
      pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    // actions es el type(que ahora lo maneja el toolkit) y el payload
    setPokemons: (state, action) => {
      // toolkit lo hace immutable
      state.pokemons = action.payload;
    },
    setSearch: (state, action) => {
      const imputValue = action.payload.toLocaleLowerCase();
      if (action.payload.length > 1) {
        const result = state.pokemons.filter((pokemon) => {
          return pokemon.data.name.includes(imputValue);
        });
        state.pokemonsSearched = result;
      } else {
        state.pokemonsSearched = [];
      }
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
        return pokemon.data.id === action.payload.pokemonId;
      });

      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;

        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },
  },
});

export const { setFavorite, setPokemons, setSearch } = dataSlice.actions;

export default dataSlice.reducer;
