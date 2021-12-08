import { createStore } from "redux";

import rootReducer from "./reducers";

//creating store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//store example
// {
//     nameReducer,
//     listsReducer.lists

// }

export default store;
