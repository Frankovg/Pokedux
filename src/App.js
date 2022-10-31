import React, { useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { Col, Spin } from "antd";
import Searcher from "./components/Searcher";
import { PokemonList } from "./components/PokemonList";
import { fetchPokemonWithDetails } from "./slices/dataSlice";
import logo from "./statics/logo.svg";
import "./App.css";

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const searchedPokemons = useSelector(
    (state) => state.data.pokemonsSearched,
    shallowEqual
  );
  const valueImputSearch = useSelector((state) => state.ui.valueImputSearch);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonWithDetails());
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList
          pokemons={pokemons}
          searchedPokemons={searchedPokemons}
          valueImputSearch={valueImputSearch}
        />
      )}
    </div>
  );
}

export default App;
