import React, { useEffect, useState } from "react";
const API_URL = "https://cats-dogs-123123.adaptable.app/monsters/";

function EditLastSeen() {
  const [updateLastSeen, setUpdateLastSeen] = useState(
    monsters.find((monster) => monster.id === monsterId)
  );

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return <div></div>;
}

export default EditLastSeen;
