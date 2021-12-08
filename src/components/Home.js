import React from "react";
import List from "./List";
import Input from "./Input";
import FoodList from "./FoodList";
import { useSelector } from "react-redux";

function Home() {
  const name = useSelector((state) => state.nameReducer.name);
  //   const list = useSelector((state) => state.listReducers.lists);
  return (
    <div className="home">
      <div className="ui horizontal segments">
        <h1 className="ui header segment">Home Component</h1>
        <p className="ui header segment">Name : {name}</p>
      </div>
      {/* <div className="ui cards">
        <List />
        <Input />
        <FoodList />
      </div> */}
      <div class="ui three column grid">
        <div class="column">
          <div class="ui segment">
            <List />
          </div>
        </div>
        <div class="column">
          <div class="ui segment">
            <Input />
          </div>
        </div>
        <div class="column">
          <div class="ui segment">
            <FoodList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
