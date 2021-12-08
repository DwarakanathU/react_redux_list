import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateName, updateList, updateFoodList } from "../redux/actions";

function Input({ onNameUpdate }) {
  const dispatch = useDispatch();
  //form data state
  const [formData, setFormData] = useState({
    name: "",
    item: "",
    foodItem: "",
  });

  //handle change
  const handleChange = (e) => {
    const tempData = {
      ...formData,
      [e.target.name]: e.target.value,
      [e.target.foodItem]: e.target.value,
    };
    setFormData(tempData);
  };

  // update name in state
  const handleNameUpdate = () => {
    dispatch(updateName(formData.name));
  };

  // update item in state
  const handleAddItem = () => {
    dispatch(updateList(formData.item));
  };

  // update item in state
  const AddFoodItem = () => {
    dispatch(updateFoodList(formData.foodItem));
    console.log("AddFoodItem", formData.foodItem);
  };
  return (
    <div className="input">
      <h2>Input</h2>
      <div className="ui input">
        <input onChange={handleChange} name="name" placeholder="Add Name" />
        <button className="ui brown button" onClick={handleNameUpdate}>
          Save
        </button>
      </div>
      <div className="ui input">
        <input onChange={handleChange} name="item" placeholder="Add Item" />
        <button className="ui brown button" onClick={handleAddItem}>
          Add
        </button>
      </div>
      <div className="ui input">
        <input
          onChange={handleChange}
          name="foodItem"
          placeholder="Add Food Item"
        />
        <button className="ui brown button" onClick={AddFoodItem}>
          add food
        </button>
      </div>
    </div>
  );
}

export default Input;
