import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { setSearch } from "../../src/slices/dataSlice";
import { setValueImputSearch } from "../../src/slices/uiSlice";

const Searcher = () => {
  const [valueImput, setValueImput] = useState("");

  const dispatch = useDispatch();

  const HandleSearch = ({ target }) => {
    setValueImput(target.value);
    dispatch(setValueImputSearch(target.value));
  };

  useEffect(() => {
    dispatch(setSearch(valueImput));
  }, [valueImput]);

  return (
    <Input.Search
      placeholder="Buscar"
      style={{ marginBottom: 10 }}
      onChange={HandleSearch}
    />
  );
};

export default Searcher;
