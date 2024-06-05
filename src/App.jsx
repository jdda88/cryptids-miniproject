import "./App.css";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import About from "./pages/About.jsx";
import MonsterList from "./pages/MonsterList.jsx";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import MonsterCard from "./components/MonsterCard.jsx";
import AddMonsterForm from "./components/AddMonster.jsx";
import { Toaster } from "react-hot-toast";
import MonsterDetails from "./pages/MonsterDetails.jsx";
import RealatedLinks from "./pages/RealatedLinks.jsx";
import { useState, useEffect } from "react";
function App() {
 
  const [favorites, setFavorites] = useState([])
  const monsterStorage = localStorage.getItem("favoritesArray")

  useEffect(() => {
    setFavorites(JSON.parse(monsterStorage) || [])
  }, [])
  return (
    <>
      <div>
        
        <Navbar favorites={favorites} setFavorites={setFavorites} />
    
        <Toaster />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/monsters" element={<MonsterList />} />
          <Route path="/monster-card/:monsterId" element={<MonsterDetails setFavorites={setFavorites} favorites={favorites} />} />
          <Route path="/new-monster" element={<AddMonsterForm />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/related-links" element={<RealatedLinks />} />

        </Routes>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
