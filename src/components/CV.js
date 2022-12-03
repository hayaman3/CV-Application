import React from 'react';
import "../assets/fonts-6/css/all.css";

const CV = (props) => {
  const { personalProps, contactInformationProps, educationProps, experienceProps } = props
  const { firstName, lastName, address, description } = personalProps
  const { phoneNumber, email } = contactInformationProps
  const  {degree, university, universityCity, } = educationProps
  const  { position, company, companyCity, } = experienceProps

  return(
    <div className='CV'>
      <i className="fa-regular fa-folder-open"></i>
      {firstName}
      {lastName}
      {address}
      {description}
      {phoneNumber}
      {email}
      {degree}
      {university}
      {universityCity}
      {position}
      {company}
      {companyCity}
    </div>
  )
}

export default CV;
