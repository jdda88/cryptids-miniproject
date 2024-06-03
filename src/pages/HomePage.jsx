import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="d-flex gap-5 justify-content-center align-items-center m-5">
   
    <div>Welcome to The Cryptid Collection!
        Enter if you dare.
    </div>
    {/* insert map and filter function here */}
    <Link to="/monsters">
        <div className="card" style={{ width: "18rem", height: "16rem" }}>
            <div className="card-body text-center">
                <h3 className="card-title">Enter Here</h3>
            </div>
        </div>
    </Link>
    </div>
  )
}
export default HomePage;
