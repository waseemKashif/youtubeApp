import React, { useState } from "react";

const SearchBar = ({ onFormSubmitted }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (e) => {
    onFormSubmitted(term);
    e.preventDefault();
    setTerm("");
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className=" ui category search">
          <div className="field ui icon input">
            <input
              className="prompt"
              placeholder=" search.."
              type="text"
              value={term}
              onChange={(e) => {
                setTerm(e.target.value);
              }}
            />
            <i class="search icon"></i>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
