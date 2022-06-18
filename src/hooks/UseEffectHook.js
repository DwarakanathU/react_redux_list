import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";
import { useEffect } from "react";

const UseEffectHook = () => {
  /*
  1) useState is one of the Hook which are introduced in React Versions 16.8
  2)useEffect is used to Maintain the side effects
  */
  const [count, setCount] = useState({
    num: 0,
    id: "abcd",
  }); // decalaration of useState Hook
  const [screen, setScreen] = useState({
    width: 0,
    height: 0,
  });

  console.log(screen);
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

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreen({ width: window.innerWidth, height: window.innerHeight });
    });
    return () => {
      //   window.removeEventListener("resize");
      console.clear();
      console.log("remove event listner");
    };
  }, [count]);

  return (
    <div>
      <button onClick={handleAdd}>+</button>
      <h3>{count.num}</h3>
      <button onClick={handleSubstract}>-</button>
      <h3>width : {screen.width}</h3>
      <h3>height : {screen.height}</h3>
    </div>
  );
};

export default UseEffectHook;
