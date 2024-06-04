import React from "react";
// import Select from "react-select";
// import AsyncSelect from "react-select/async";
import { useState, useEffect } from "react";
import axios from "axios";

function SearchBar() {

  const [searchTerm, setSearchTerm] = useState("");
  const [monsterSearchData, setMonsterSearchData] = useState([])
  const [searchResults, setSearchResults] = useState([])

  const API_URL = "https://cats-dogs-123123.adaptable.app/monsters";

const handleSearch = async () => {
  try {
    if (monsterSearchData.length === 0) {
      const response = await axios.get(API_URL);
      setMonsterSearchData(response.data);
    }
    const filteredResults = monsterSearchData.filter((monster) =>
      monster.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  } catch (error) {
    console.log("error fetching data", error);
  }
};
  
  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  // this needs to be finish 
  // monsterSearchData.filter(monster) => {monster.toLowerCase().includes(searchTerm.toLowerCase()))}
  // set the search result state
  // navegate to that result 

  // const fetchMonsterSearchData = async () => {
  //   try {
  //     const response = await axios.get(API_URL);
  //     console.log(response.data)
  //     setMonsterSearchData(response.data);
  //   } catch (error) {
  //     console.log("Error Here -->>", error);
  //   }
  // };
  // useEffect(() => {
  //   fetchMonsterSearchData();
  // }, []);

  // const handleInputChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  // // const filterOptions = options.filter((option) =>
  // //   option.label.toLowerCase().includes(searchTerm.toLowerCase())
  // // );

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for cryptid by name..."
        style={{
          padding: "8px",
          marginRight: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          width: "350px",
        }}
      />
      {/* <Select options={filterOptions} style={{}} /> */}
      <button
        className="btn btn-primary bg-black border-0"
        type="button"
        style={{ fontSize: "16px" }}
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
