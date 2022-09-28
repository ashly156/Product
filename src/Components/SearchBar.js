import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
  return (
    <div className="search">
      <h1 className="title">Search</h1>
      <hr></hr>
      <div className="searchInputs">
        <div className="searchIcon">
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default SearchBar;
