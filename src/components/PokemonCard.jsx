import React from "react";
import { useDispatch } from "react-redux";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import StarButton from "./StarButton";
import { setFavorite } from "../slices/dataSlice";
import "./pokemonlist.css";

export const PokemonCard = ({ name, image, types, id, favorite }) => {
  const typesString = types.map((elem) => elem.type.name).join(", ");
  const dispatch = useDispatch();

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <Card
      className="card"
      title={name}
      cover={<img className="picture" src={image} alt={name} />}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta description={typesString} />
    </Card>
  );
};
