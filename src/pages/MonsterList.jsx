import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddMonsterForm from "../components/AddMonster.jsx";

const API_URL = ["https://cats-dogs-123123.adaptable.app/monsters"];

function MonsterList() {
  const [monsters, setMonsters] = useState(null);
  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const response = await axios.get(API_URL);
        setMonsters(response.data);
      } catch (error) {
        console.log("Error Here -->>", error);
      }
    };
    fetchMonsters();
  }, []);

  return (
    <div>
      <h1>All monsters Here</h1>
      <div className="container d-flex flex-wrap">
        <div>
          <AddMonsterForm monsters={monsters} setMonsters={setMonsters} />
        </div>
        {monsters &&
          monsters.map((monster) => {
            return (
              <div className="col-md-3 mb-4" key={monster.id}>
                <div className="card">
                  <div className="d-flex row">
                    <img
                      className="card-img-top"
                      src="https://res.cloudinary.com/dprkq4xne/image/upload/v1717443707/Monster-project/cthulhu_e0zzvu.png"
                      alt="Card image"
                    />
                    <div className="card-body">
                      <h4 className="card-title">{monster.name}</h4>
                      <Link to={`/MonsterCard/${monster.id}`}>
                      <a className="btn btn-primary">See Profile</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>

    // <div key={monster.id}>
    //   <div className="card" style="width:400px">
    //     <div><img className="card-img-top" src="HERE COMES IMAGE" alt="Card image" />
    //     <div className="card-body">
    //       <h4 className="card-title">{monster.name}</h4>
    //       <p className="card-text">Some example text.</p>
    //       <a href="#" className="btn btn-primary">
    //         See Profile
    //       </a>
    //     </div></div>
    //   </div>
    // </div>
  );
}

export default MonsterList;
