import React, { useState } from 'react';
import Personal from './Personal';
import Education from './Education';


const Form = () => {
  const [page, setPage] = useState("Personal");
  const pageArray = ["Personal","Education","Experience"]

  const goBackPage = () =>{
    switch(page) {
      case "Personal":
        // code block
        break;
      case "Education":
        setPage("Personal")
        break;
      default:
        // code block
    }

  };

  const goNextPage = () =>{
    switch(page) {
      case "Personal":
        setPage("Education")
        // code block
        break;
      case "Education":
        
        break;
      default:
        // code block
    }
  };



  return (
    // <form>
    <div>
      {page === "Personal" &&
        <Personal />
      }
      {page === "Education" &&
        <Education />
      }
      <button onClick={goBackPage}>Back</button>
      <button onClick={goNextPage}>Next</button>
    </div>
    // </form>
  );
};

export default Form;
