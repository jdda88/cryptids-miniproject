import React, { useEffect, useState } from "react";
const API_URL = "https://cats-dogs-123123.adaptable.app/monsters/";

function EditLastSeen() {
  const [updateLastSeen, setUpdateLastSeen] = useState("");

  const handleUpdate = async (e, monsterId) => {
    e.preventDefault();
    console.log("handle update here", e);
    try {
      const response = await axios.put(`API_URL/${monsterId}`, {
        lastSeen: updateLastSeen,
      });
      console.log("respose updated", response.data);
    } catch (error) {
      console.log("here is an error on update", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <label htmlFor="lastSeen">Update Last Seen:</label>
        <input
          type="text"
          id="lastSeen"
          value={updateLastSeen}
          onChange={(e) => setUpdateLastSeen(e.target.value)}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditLastSeen;
