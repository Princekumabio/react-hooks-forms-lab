import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [formData, setFormData] = useState({
    id: uuid(),
    name: "",
    category: "Produce"
  })

  function onInputChange(event) {
    let name = event.target.value;
    let value = event.target.value;

    setFormData({
      ...formData, [name]: value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.name !== "") { onItemFormSubmit({ ...formData }) }

    else {
      alert("Kindly enter a name")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={onInputChange} type="text" name="name" value={formData.name} />
      </label>

      <label>
        Category:
        <select onChange={onInputChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
