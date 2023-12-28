import React, { useState } from "react";

const SearchBar = ({ onFormSubmitted }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (e) => {
    onFormSubmitted(term);
    e.preventDefault();
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Search here</label>
          <input
            type="text"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
