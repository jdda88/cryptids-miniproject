import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const API_URL = "https://cats-dogs-123123.adaptable.app/monsters/";

function DeleteMonster({ monster }) {

  const navigate = useNavigate();
  const handleDelete = async (e) => {
    // e.preventDefault();
    try {
        const confirmation = confirm("Are you sure you want to delete?")
        if(confirmation){
            const response = await axios.delete(`${API_URL}/${monster.id}`);
      toast.success("Monster deleted successfully")
        navigate("/monsters")
        }
      
    } catch (error) {
      console.log("DELETE ERROR HERE ->", error);
    }
  };

  return (
    <div className="text-center">
        <a id="delete-button" className="btn btn-outline-dark" onClick={handleDelete}>Delete this monster</a>
    </div>
  );
}

export default DeleteMonster;

// const deleteDish = (dishId) => {
//     const filteredDishes = dishes.filter((dish) => dish.id !== dishId);
//     setDishes(filteredDishes);

// <button onClick={() => deleteDish(dish.id)} className="delete-btn">
//                 Delete this dish
//               </button>
