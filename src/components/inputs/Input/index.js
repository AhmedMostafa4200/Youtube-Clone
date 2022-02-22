import { useState } from "react";

import { useDispatch } from "react-redux";

import Delete from "../../resources/icons/Delete";
import Search from "../../resources/icons/Search";

import "./Input.scss";
import { getSearch } from "../../../redux/actions/InputAction";

const Input = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClearSearch = () => {
    setSearch("");
  };

  const handleAddSearchKey = () => {
    dispatch(getSearch(search));
  };

  return (
    <div className="search">
      <div className="search__box">
        <input
          type="text"
          name="search"
          value={search}
          onChange={handleSearch}
          className="search__input"
        />
        {search && (
          <div
            role="button"
            className="search__delete"
            onClick={handleClearSearch}
          >
            <Delete />
          </div>
        )}
      </div>
      <button
        type="button"
        className="search__icon"
        onClick={handleAddSearchKey}
      >
        <Search />
      </button>
    </div>
  );
};

export default Input;
