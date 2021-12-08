import React from "react";
import { useSelector } from "react-redux";

function List() {
  const lists = useSelector((state) => state.listReducers.lists);
  return (
    <div className="lists">
      <h2>Lists</h2>
      {lists.map((item, id) => (
        <div key={id} className="list_item">
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}

export default List;
