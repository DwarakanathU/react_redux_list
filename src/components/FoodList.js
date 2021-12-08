import React from "react";
import { useSelector } from "react-redux";

const FoodList = () => {
  const foodList = useSelector((state) => state.foodListReducer.foodList);
  console.log("this is food list", foodList);
  return (
    <div className="card">
      <div class="header">Hello Foodies</div>
      <div class="meta">
        {foodList.map((food, id) => (
          <div key={id}>
            <p>{food}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
