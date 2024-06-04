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
    <div >
      <br />
      <div className="container d-flex flex-wrap" >
        <div>
          <AddMonsterForm monsters={monsters} fetchMonsters={fetchMonsters} />
        </div>
        {monsters &&
          monsters.map((monster) => (
            <div  className="col-md-3 mb-4" key={monster.id} >
              <div className="card" >
                <img
                  className="card-img-top"
                  src="https://res.cloudinary.com/dprkq4xne/image/upload/v1717443707/Monster-project/cthulhu_e0zzvu.png"
                  alt="Card image"
                />
                <div className="card-body">
                  <h4 className="card-title">{monster.name}</h4>
                  <Link to={`/MonsterCard/${monster.id}`}>
                    <button className="btn btn-primary">See Profile</button>
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
