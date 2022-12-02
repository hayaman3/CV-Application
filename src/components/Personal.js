import React, { useEffect } from 'react';

const Personal = (personalProps) => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    address,
    setAddress,
    description,
    setDescription
  } = personalProps
  
  useEffect(() => {
    localStorage.setItem('firstName', firstName);
  }, [firstName]);

  useEffect(() => {
    localStorage.setItem('lastName', lastName);
  }, [lastName]);

  useEffect(() => {
    localStorage.setItem('address', address);
  }, [address]);

  useEffect(() => {
    localStorage.setItem('description', description);
  }, [description]);

  return(
    <div className='personal-form'>
      <h2>Personal Information</h2>

      <div className="first-name">
        <label className="form-label" htmlFor="firstName">First Name </label>
        <input  
          type="text"
          value={firstName}
          name="firstName"
          id="first-name"  
          className="form-input"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="last-name">
        <label className="form-label" htmlFor="lastName">Last Name </label>
        <input  
          type="text"
          value={lastName}
          name="lastName"
          id="last-name"
          className="form-input"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="address">
        <label className="form-label" htmlFor="address">Address </label>
        <input  
          type="text"
          value={address}
          name="address"
          id="address"
          className="form-input"
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="address">
        <textarea 
          id="description" 
          rows="5" 
          placeholder="Description..."
          className="form-input"
          onChange={(e) => setDescription(e.target.value)}
        >
        </textarea>
      </div>

    </div>
  )

}

export default Personal;