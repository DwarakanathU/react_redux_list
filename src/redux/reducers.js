import { combineReducers } from "redux";
//name reducers
const initNameState = {
  name: "",
};

const nameReducer = (state = initNameState, action) => {
  console.log("inside name reducer", action);
  switch (action.type) {
    case "UPDATE_NAME":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

const initListState = {
  lists: [],
};

const listReducers = (state = initListState, action) => {
  console.log("inside list reducer", action);
  switch (action.type) {
    case "UPDATE_LIST":
      return {
        ...state,
        lists: [...state.lists, action.payload],
      };
    default:
      return state;
  }
};

// updating Food list

const initfoodList = {
  foodList: [],
};

const foodListReducer = (state = initfoodList, action) => {
  console.log("inside food list reducer", action);
  switch (action.type) {
    case "UPDATE_FOOD_LIST":
      return {
        ...state,
        foodList: [...state.foodList, action.payload],
      };
    default:
      return state;
  }
};

// combine all reducers to one
const rootReducer = combineReducers({
  nameReducer,
  listReducers,
  foodListReducer,
});

export default rootReducer;
