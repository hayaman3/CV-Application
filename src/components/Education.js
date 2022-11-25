import React, { useState } from 'react';

const Education = () => {
  const [educationData, setEducationData] = useState({});
  

  const onChange = (e) => {

    let key = e.target.id
    let value = e.target.value
    let obj= {}
    obj[key] = value
    console.log(obj)

  }

  return(
    <div>
      <h2>Education</h2>
      <div className="school">
        <label className="form-label" htmlFor="school">College </label>
        <input  type="text" 
        name="" 
        id="school"  
        className="form-input"
        onChange={onChange}
        />
      </div>
      <div className="school-address">
        <label className="form-label" htmlFor="school-address">School Address </label>
        <input  
        type="text" 
        name="" 
        id="school-address"  
        className="form-input"
        />
      </div>
    </div>
  )

}

export default Education;