import React from "react";

const name = "Stephane";
const thoughts = "is great!";

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}.</h1>
          <h2>My name has {name.length} letters.</h2>
          <h2>I think React {thoughts}</h2>
          <h2>My name without any vowels is: {name.replace(/[aeiou]/ig,'')}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
