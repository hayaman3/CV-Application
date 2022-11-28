import React, { useState } from 'react';

const Experience = () => {
  const [experienceData , setExperienceData] = useState({});

  const onChange = (e) => {
    let key = e.target.id
    let value = e.target.value
    let newData= {}
    newData[key] = value
    setExperienceData( experienceData => ({
      ...experienceData,
      ...newData
    }))

  }
  

  return(
    <div>
      <h2>Education</h2>
      <div className="work-experience">
        <label className="form-label" htmlFor="work-experience">Work Experience </label>
        <input  
        type="text" 
        name="" 
        id="work-experience"  
        className="form-input"
        />
      </div>
      <div className="job-title">
        <label className="form-label" htmlFor="job-title">Job Title </label>
        <input  type="text" 
        name="" 
        id="job-title"  
        className="form-input"
        onChange={onChange}
        />
      </div>
      <div className="work-address">
        <label className="form-label" htmlFor="work-address">Work Address </label>
        <input  
        type="text" 
        name="" 
        id="work-address"  
        className="form-input"
        onChange={onChange}
        />
      </div>
    </div>
  )

}

export default Experience;