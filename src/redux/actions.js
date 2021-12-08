// update name action

export const updateName = (name) => {
  return {
    type: "UPDATE_NAME",
    payload: name,
  };
};

// update list action

export const updateList = (list) => {
  return {
    type: "UPDATE_LIST",
    payload: list,
  };
};

// Update Food List Action

export const updateFoodList = (foodList) => {
  console.log("updateFoodList action", foodList);
  return {
    type: "UPDATE_FOOD_LIST",
    payload: foodList,
  };
};
