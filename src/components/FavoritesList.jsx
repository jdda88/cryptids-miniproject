import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "https://cats-dogs-123123.adaptable.app/monsters/";

function FavoritesList({ favorites, setFavorites }) {
  //     if (!isFavorite) {
  //         return null;
  //     }

  //   const [monster, setMonster] = useState(null);
  //   const [ showFavoritesModal, setShowFavoritesModal ] = useState(false);

  // const { monsterId } = useParams();

  // const fetchSingleMonster = async () => {
  //     try {
  //         const response = await axios.get(API_URL + monsterId);
  //         setMonster(response.data);
  //     } catch (error) {
  //         console.log("error fetching monster details:", error);
  //     }
  // };

  // useEffect(() => {
  //     fetchSingleMonster();
  // }, [monsterId]);

  // const handleFavorite = () => {
  //     setShowFavoritesModal(true);
  //     console.log("showFavoritesModal:", showFavoritesModal);
  // };

  return (
    <div className="mr-5">
      <button
        className="btn text-white"
        data-bs-target="#favoritesList"
        data-bs-toggle="collapse"
        aria-controls="#favoritesList"
        aria-expanded="false"
        type="button"
      >
       ❤️ Favorites
      </button>
      <div className="collapse position-fixed m-3 p-3"  id="favoritesList">
        {favorites && favorites.length ? (
          favorites.map((monster) => <h2>{monster.name}</h2>)
        ) : (
          <p>no favorites</p>
        )}
      </div>
    </div>
  );
}

export default FavoritesList;
