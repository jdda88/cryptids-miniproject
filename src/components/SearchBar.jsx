import React from "react";
import Select from "react-select";
import { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
function SearchBar() {

  const [monsterSearchData, setMonsterSearchData] = useState([])
  const navigate = useNavigate()
  const API_URL = "https://cats-dogs-123123.adaptable.app/monsters";


const styleFunction = {
  control: (base) => ({
    ...base,
    width: '400px', // Adjust as needed
    minWidth: '100%', // Ensures the width expands to fit content

  }),
};
  const handleChange = (e) => {
    navigate("/monster-card/" + e.value)
    e.clear()
  }
  const fetchMonsterSearchData = async () => {
    try {
      const response = await axios.get(API_URL);
      console.log(response.data)
      setMonsterSearchData(response.data.map(monster => ({value: monster.id, label: monster.name })));
    } catch (error) {
      console.log("Error Here -->>", error);
    }
  };
  useEffect(() => {
    fetchMonsterSearchData();
  }, []);

  return (
  <div style={{ display: "flex", alignItems: "center" }}>
  

       <Select 
       id="search-bar"
       styles={styleFunction} 
       options={monsterSearchData} 
       onChange={handleChange} 
       isClearable={true} 
       defaultValue={monsterSearchData[0]} />
     </div>
  );
}

export default SearchBar;
