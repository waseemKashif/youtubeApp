import React, { useState } from "react";

const SearchBar = ({ onFormSubmitted }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (e) => {
    onFormSubmitted(term);
    e.preventDefault();
    setTerm("");
  };

  return (
    <div className="" style={{ paddingBottom: "10px", width: "100%" }}>
      <form onSubmit={onSubmit} className="ui form">
        <div className="field ui action input">
          <input
            type="text"
            placeholder="Search"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
          <button className="ui icon button" type="submit">
            {" "}
            <i className="search icon"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
