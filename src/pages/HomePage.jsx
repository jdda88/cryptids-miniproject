import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
    <div className="d-flex gap-5 justify-content-center align-items-center m-5">
      <img className="home-page-image" src="https://res.cloudinary.com/dprkq4xne/image/upload/v1717613865/Monster-project/cc_fiysqp.png" alt="" />
      <div className="d-flex flex-wrap flex-column justify-content-center align-items-center text-center">
      <h1>
        Welcome to The Cryptid Collection
        <h2>Enter if you dare...</h2>
      </h1>
      {/* insert map and filter function here */}
      <Link to="/monsters" style={{ textDecoration: "none" }}>
        <div className="card" style={{ width: "20rem", height: "4rem" }}>
          <div className="card-body">
            <h3 className="card-title">Enter Here</h3>
          </div>
        
        </div>
      </Link>
    </div>
    
    </div>
    <Footer />
    </div>
  );
}
export default HomePage;
