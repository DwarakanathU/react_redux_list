import React, { useState } from "react";

const UseStateHook = () => {
  /*
  1) useState is one of the Hook which are introduced in React Versions 16.8
  2)useState is Used to update the State 
  3)const [count, setCount] = useState(0);  
  count is called value or variable which holds the state
  setCount is used to update the State
  The parameter used inside useState is initial value of the state
   */
  const [count, setCount] = useState({
    num: 0,
    id: "abcd",
  }); // decalaration of useState Hook

  const handleAdd = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num + 1,
      };
    });

    console.log(count);
  };

  const handleSubstract = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num - 1,
      };
    });
  };
  return (
    <div>
      <button onClick={handleAdd}>+</button>
      <h3>{count.num}</h3>
      <button onClick={handleSubstract}>-</button>
    </div>
  );
};

export default UseStateHook;
