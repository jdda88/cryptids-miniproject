import React, { useEffect, useState } from "react";
const API_URL = "https://cats-dogs-123123.adaptable.app/monsters/";
import axios from "axios";

function EditLastSeen({ monster, fetchSingleMonster }) {
  const [updateLastSeen, setUpdateLastSeen] = useState("");
  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log("handle update here", e);
    try {
      const response = await axios.put(`${API_URL}/${monster.id}`, {
        ...monster,
        lastSeen: updateLastSeen,
      });
      fetchSingleMonster();
      console.log("respose updated", response.data);
    } catch (error) {
      console.log("here is an error on update", error);
    }
  };

  return (
    <div className="container">
    <div className="d-flex justify-content-center">
      <form onSubmit={handleUpdate}>
        <div className="form-row align-items-center">
          <div className="col-auto">
            <label
              className="sr-only"
              htmlFor="lastSeen"
            >
            </label>
            <input
              className="form-control mb-2"
              type="text"
              id="lastSeen"
              value={updateLastSeen}
              onChange={(e) => setUpdateLastSeen(e.target.value)}
              required
              placeholder="Update Last Seen..."
            />
          </div>
          <div className="col-auto">
            <div className="text-center">
            <button className="btn btn-primary mb-2 mx-auto bg-black border-0" type="submit">
              Update
            </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  );
}

export default EditLastSeen;
