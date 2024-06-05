import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddMonsterForm from "../components/AddMonster.jsx";

const API_URL = "https://cats-dogs-123123.adaptable.app/monsters";

function MonsterList() {
  const [monsters, setMonsters] = useState(null);
  const [favorites, setFavorites] = useState([]); // Initialize favorites state

  const fetchMonsters = async () => {
    try {
      const response = await axios.get(API_URL);
      setMonsters(response.data);
    } catch (error) {
      console.log("Error Here -->>", error);
    }
  };
  useEffect(() => {
    fetchMonsters();
  }, []);

  const handleFavorite = (id) => {
    const selectedMonster = monsters.find((monster) => monster.id === id);

    // Add the selected monster to favorites
    setFavorites((prevFavorites) => [...prevFavorites, selectedMonster]);
  };

  return (
    <div>
      <br />
      <div className="container d-flex flex-wrap justify-content-center align-items-center">
        <div>
          <AddMonsterForm monsters={monsters} fetchMonsters={fetchMonsters} />
        </div>
        {monsters &&
          monsters.map((monster) => (
            <div id="monster-card-container" className="col-md-3 m-5 " key={monster.id}>
              <div className="card w-100 ">
                <img
                  className="card-img-top"
                  src={monster.image}
                  alt="Card image"
                />
                <div className="card-body text-center">
                  <h4 id="monster-name"  style={{ color: "white" }}>
                    {monster.name}
                  </h4>
                  <Link to={`/monster-card/${monster.id}`}>
                    <button id="see-profile" type="button" className="btn btn-outline-dark">See Profile</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MonsterList;
