import React from "react";
import Alert from "./components/Alert";

function rooster(){
  return "Rookokoko"
}

function App() {
  return <Alert chicken="Bukbuk" num1={1} func={rooster} type="danger">Invalid user id or password</Alert>;
}

export default App;
