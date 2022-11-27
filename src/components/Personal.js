import React, { useState, useEffect, useRef } from 'react';

const Personal = () => {
  const [personalData, setPersonalData] = useState({});
  const personalData1 = useRef();
  let personalData2 = ""

  const onChange = (e) => {
    let key = e.target.id
    let value = e.target.value
    let newData= {}
    newData[key] = value
    setPersonalData( personalData => ({
      ...personalData,
      ...newData
    }))
    // localStorage.setItem("")
    // personalData1.current = e.target.value
    // console.log(personalData1)
    personalData2 = personalData2 + e.target.value
    console.log(personalData2)
    
  }

  // FOR CHECKING DELETE @ FINAL REVIEW
  useEffect(() => console.log(personalData["first-name"]), [personalData]);

  return(
    <div className='form'>
      <h2>Personal Information</h2>
      <div className="first-name">
        <label className="form-label" htmlFor="first-name">First Name </label>
        <input  type="text" 
          // ref={personalData}
          // value={personalData2}
          name="" 
          id="first-name"  
          className="form-input"
          onChange={onChange}
        />
      </div>
      <div className="last-name">
        <label className="form-label" htmlFor="lastName">Last Name </label>
        <input  
        type="text" 
        name="last-name" 
        id="last-name"  
        className="form-input"
        onChange={onChange}
        />
      </div>
      <div className="email">
        <label className="form-label" htmlFor="email">Email </label>
        <input  
        type="text" 
        name="email" 
        id="email"  
        className="form-input"
        onChange={onChange}
        />
      </div>
      <div className="phone">
        <label className="form-label" htmlFor="phone">Phone </label>
        <input  
        type="tel"
        name="phone" 
        id="phone"  
        className="form-input"
        onChange={onChange}
        />
      </div>
    </div>
  )

}

export default Personal;