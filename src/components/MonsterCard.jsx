import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditLastSeen from "../pages/EditLastSeen";
import DeleteMonster from "../pages/DeleteMonster";

const API_URL = "https://cats-dogs-123123.adaptable.app/monsters/";

function MonsterCard() {
  const [monster, setMonster] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const { monsterId } = useParams();

  const fetchSingleMonster = async () => {
    try {
      const response = await axios.get(API_URL + monsterId);
      setMonster(response.data);
    } catch (error) {
      console.log("error on details car -->>", error);
    }
  };
  useEffect(() => {
    fetchSingleMonster();
  }, [monsterId]);

  const handleFavorite = () => {
    console.log("added monster to favorites");
  };

  return (
    <div >
      {" "}
      {monster && (
        <div
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dprkq4xne/image/upload/v1717525356/Monster-project/scroll-background2_iubsgr.png')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
          }}
        >
          <div className="container" style={{ width: "300px" }}>
            <div className="col ">
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
                <h4>Last Seen: {monster.lastSeen}</h4>
                <div className="text-center">
                  <button
                    className={`btn ${
                      isFavorite ? "btn-danger" : "btn-outline-light"
                    } mb-2`}
                    onClick={() =>
                      setIsFavorite((prevIsFavorite) => !prevIsFavorite)
                    }
                  >
                    {" "}
                    ❤️{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}{" "}
      <EditLastSeen fetchSingleMonster={fetchSingleMonster} monster={monster} />
      <div>
        <DeleteMonster monster={monster} />
      </div>
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
