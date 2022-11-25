import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  const [mode, setMode] = useState("Save");

  const changeMode = () => {
    if(mode==="edit"){
      setMode("Edit")
    }else{
      setMode("Save")
    }
  }

  return (
    <div className="App">
      <button onClick={changeMode}>{mode}</button>

     <Form/>

    </div>
  );
}

export default App;