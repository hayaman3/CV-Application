import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  const [mode, setMode] = useState("Save");

  const changeMode = () => {
    if(mode==="Edit"){
      setMode("Save")
    }else{
      setMode("Edit")      
    }
  }


  return (
    <div className="App">
      <button onClick={changeMode}>{mode}</button>

     <Form />

    </div>
  );
}

export default App;