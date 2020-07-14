import React from "react";
import "../styles/SearchBox.css";

function SearchBox({ handleSearchChange }) {
  return (
    <div className="searchbox">
      <form className="form-inline">
        <input
          className="form-control"
          placeholder="Search"
          type="search"
          aria-label="Search"
          onChange={e => handleSearchChange(e)}
        />
      </form>
      <p>Seach the employee by clicking on the search box.</p>
    </div>
  );
}
export default SearchBox;