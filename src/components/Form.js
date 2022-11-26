import React, { useState } from 'react';
import Personal from './Personal';
import Education from './Education';


const Form = () => {
  const [page, setPage] = useState("Personal");
  const [counter, setCounter] = useState(0);

  const pageArray = ["Personal","Education","Experience"]

  const ENUM_STATES = {
    0: <Personal />,
    1: <Education />,
    // 3: <Experience />,
  };
  
  const EnumState = () => {
    console.log(ENUM_STATES[counter]+ "asd")
    return ENUM_STATES[counter]
  } 

  const goBackPage = () =>{
    // switch(page) {
    //   case "Personal":
    //     // code block
    //     break;
    //   case "Education":
    //     setPage("Personal")
    //     break;
    //   default:
    //     // code block
    // }
    setCounter(counter -1)


  };

  const goNextPage = () =>{
    // switch(page) {
    //   case "Personal":
    //     setPage("Education")
    //     break;
    //   case "Education":
        
    //     break;
    //   default:
    //     // code block
    // }
    setCounter(counter +1)

  };


  return (
    // <form>
    <div>
      {EnumState({counter})}
      <div className='form-nav'>
        {counter !== 0 &&
          <button id="back-button" onClick={goBackPage}>Back</button>
        }
        <button onClick={goNextPage}>Next</button>
      </div>
    </div>
    // </form>
  );
};

export default Form;
