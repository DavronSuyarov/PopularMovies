import { useState } from "react";
import "./search-panel.css";

const SearchPanel = ({ searchHandler }) => {
  const [value, setValue] = useState("");

  return (
    <input
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        searchHandler(e.target.value);
      }}
      type="text"
      className="form-control search-input"
      placeholder="Search movies...!"
    />
  );
};

export default SearchPanel;
