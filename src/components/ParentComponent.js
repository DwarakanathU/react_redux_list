import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <div>
      <h1>This is a Parent Component</h1>
      <ChildComponent />
    </div>
  );
};

export default ParentComponent;
