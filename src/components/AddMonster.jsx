import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "bootstrap";


function AddMonsterForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [rating, setRating] = useState(0);
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);
  const handleType = (e) => setType(e.target.value);
  const handleRating = (e) => setRating(e.target.value);
  const handleInstructions = (e) => setInstructions(e.target.value);
  const handleImage = (e) => setImage(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Pressing the button for add monster!")
    try {
      const response = await axios.post(
        "https://cats-dogs-123123.adaptable.app/monsters",
        {
          name,
          description,
          location,
          type,
          rating,
          instructions,
          image,
        }
      );
      navigate("/monsters");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#MonsterFormModal"
      >
        Add a Cryptid to the list
      </button>
      <div
        className="modal fade"
        id="MonsterFormModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit} id="MonsterForm">
                <label>Name</label>
                <input
                  className="form-control mb-4"
                  name="name"
                  type="text"
                  required
                  placeholder="Cryptid's Name"
                  value={name}
                  onChange={handleName}
                />
                <label>Description</label>
                <input
                  className="form-control"
                  name="description"
                  type="text"
                  required
                  placeholder="Description of the creature"
                  value={description}
                  onChange={handleDescription}
                />
                <label>Location</label>
                <input
                  className="form-control mb-4"
                  name="location"
                  type="text"
                  required
                  placeholder="Location spotted"
                  value={location}
                  onChange={handleLocation}
                />
                <label>Type</label>
                <input
                  className="form-control"
                  name="type"
                  type="text"
                  required
                  placeholder="Land, water, or air-type creature"
                  value={type}
                  onChange={handleType}
                />
                <label>Scare Rating</label>
                <input
                  className="form-control"
                  name="rating"
                  type="number"
                  required
                  placeholder="Scale 1-10, 1 being less scary and 10 being most"
                  value={rating}
                  onChange={handleRating}
                />
                <label>Instructions</label>
                <input
                  className="form-control"
                  name="instructions"
                  type="text"
                  required
                  placeholder="Instructions to invoke the creature, protect yourself from it, etc."
                  value={instructions}
                  onChange={handleInstructions}
                />
                <label>Image</label>
                <input
                  name="image"
                  type="url"
                  required
                  placeholder="Image URL"
                  className="form-control"
                  value={image}
                  onChange={handleImage}
                />
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                form="MonsterForm"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddMonsterForm;
