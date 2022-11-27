import React, { useState } from 'react';

const Education = () => {
  const [educationData, setEducationData] = useState({});

  const onChange = (e) => {
    let key = e.target.id
    let value = e.target.value
    let newData= {}
    newData[key] = value
    setEducationData( educationData => ({
      ...educationData,
      ...newData
    }))

  }
  

  return(
    <div>
      <h2>Education</h2>
      <div className="degree">
        <label className="form-label" htmlFor="degree">Degree </label>
        <input 
        type="text" 
        name="" 
        id="degree"  
        className="form-input"
        />
      </div>
      <div className="school">
        <label className="form-label" htmlFor="school">University </label>
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
        onChange={onChange}
        />
      </div>
    </div>
  )

}

export default Education;