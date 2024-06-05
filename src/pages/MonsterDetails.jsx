import MonsterCard from "../components/MonsterCard.jsx"

function MonsterDetails({favorites, setFavorites}) {
  return (
    <div><MonsterCard setFavorites={setFavorites} favorites={favorites}/></div>
  )
}

export default MonsterDetails