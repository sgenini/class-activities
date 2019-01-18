/* eslint-disable default-case */
import React from "react";

// Create a new component named "Math"
function Math(props){
  console.log(props);
  let value;

  switch (props.operator){
    case "+":
      value = props.num1 + props.num2;
      break;
    case "-":
      value = props.num1 - props.num2;
      break;
    case "*":
      value = props.num1 * props.num2;
      break;
    case "/":
      value = props.num1 / props.num2;
      break;
  }

  return <span>{value}</span>

}

export default Math;