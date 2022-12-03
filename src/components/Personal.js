import React, { useEffect } from 'react';

const Personal = (personalProps) => {
  const {
    name,
    setName,
    title,
    setTitle,
    address,
    setAddress,
    description,
    setDescription
  } = personalProps
  
  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  useEffect(() => {
    localStorage.setItem('title', title);
  }, [title]);

  useEffect(() => {
    localStorage.setItem('address', address);
  }, [address]);

  useEffect(() => {
    localStorage.setItem('description', description);
  }, [description]);


  return(
    <div className='personal-form'>
      <h2>Personal Information</h2>

      <div className="name">
        <label className="form-label" htmlFor="name">Name </label>
        <input  
          type="text"
          value={name}
          name="name"
          id="name"  
          className="form-input"
          onChange={(e) => setName(e.target.value)}
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

      <div className="title">
        <label className="form-label" htmlFor="address">Title </label>
        <input  
          type="text"
          value={title}
          name="title"
          id="title"
          className="form-input"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="description">
        <textarea 
          id="description"
          value={description}
          rows="4" 
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