import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditLastSeen from "../pages/EditLastSeen";


const API_URL = "https://cats-dogs-123123.adaptable.app/monsters/";

function MonsterCard() {
  const [monster, setMonster] = useState(null);
  const { monsterId } = useParams();

  useEffect(() => {
    const fetchSingleMonster = async () => {
      try {
        const response = await axios.get(API_URL + monsterId);
        setMonster(response.data);
      } catch (error) {
        console.log("error on details car -->>", error);
      }
    };
    fetchSingleMonster();
  }, [monsterId]);
  return (
    <div>
      {" "}
      {monster && (
        <div>
          <h1>Respective info card</h1>
          <div className="container" style={{width:"500px"}}>
            <div className="col">
              <img
                className="card-img-top ="
                src="https://res.cloudinary.com/dprkq4xne/image/upload/v1717443707/Monster-project/cthulhu_e0zzvu.png"
                alt="Card image"
              />
              <div className="card-body">
                <h4 className="card-title">{monster.name}</h4>
                <h4> Description: {monster.description}</h4>
                <h4>Location: {monster.location}</h4>
                <h4>Type: {monster.type}</h4>
                <h4>Scare Rating: {monster.scareRating}</h4>
                <h4>{monster.invoqueInstructions}</h4>
              </div>
            </div>
          </div>
        </div>
      )}{" "}
      <EditLastSeen/>
    </div>
  );
}

export default MonsterCard;

// "id": 1,
// "name": "Bigfoot",
// "location": "North America",
// "description": "A large, ape-like creature said to inhabit forests.",
// "type": "ground",
// "scareRating": 7,
// "invoqueInstructions": null
