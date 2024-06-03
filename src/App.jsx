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

function App() {
  return (
    <>
      <div>
        
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/monsters" element={<MonsterList />} />
          <Route path="/MonsterCard/:monsterId" element={<MonsterCard />} />
          <Route path="/new-monster" element={<AddMonsterForm />} />
          <Route path="/notFound" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
