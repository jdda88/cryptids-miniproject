import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditLastSeen from "../pages/EditLastSeen";
import DeleteMonster from "../pages/DeleteMonster";
import FavoritesList from "./FavoritesList";

const API_URL = "https://cats-dogs-123123.adaptable.app/monsters/";

function MonsterCard({ setFavorites , favorites}) {
  const [monster, setMonster] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const { monsterId } = useParams();

  const handleFavorite = (monster) => {
    console.log(favorites)
    setFavorites((prev) =>
     prev && prev.find(current => current.id === monster.id)
        ? prev.filter((current) => current.id !== monster.id)
        : [...prev, monster]
    );
  };

  useEffect(()=> {
    localStorage.setItem("favoritesArray", JSON.stringify(favorites))

  }, [favorites])

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



  return (
    <div>
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
            minHeight: "100vh",
          }}
        >
          <div className="container " style={{ width: "300px" }}>
            <div className="col ">
              <img
                className="card-img-top ="
                src={monster.image}
                alt="Card image"
              />
              <div className="card-body">
                <h4 id="monster-name" className="card-title m-2">{monster.name}</h4>
                <h4 className="m-2"> Description: {monster.description}</h4>
                <h4 className="m-2">Location: {monster.location}</h4>
                <h4 className="m-2">Type: {monster.type}</h4>
                <h4 className="m-2">Scare Rating: {monster.scareRating}</h4>
                <h4 className="m-2">{monster.invoqueInstructions}</h4>
                <h4 className="m-2">Last Seen: {monster.lastSeen}</h4>
                <div className="text-center ">

                  <button
                    id="favorite-button" className={`btn ${
                      favorites && favorites.find(current => current.id === monster.id) ? "btn-danger" : "btn-transparent"
                    } m-3`}
                    onClick={() =>
                     handleFavorite(monster)
                    }
                  >
                    {" "}
                    ❤️{" "}
                  </button>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}{" "}
      <EditLastSeen fetchSingleMonster={fetchSingleMonster} monster={monster} />
      <div className="m-5 pb-5">
        <DeleteMonster monster={monster} />
      </div>
    </div>
  );
}

export default MonsterCard;
