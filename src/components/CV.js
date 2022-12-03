import React from 'react';
import "../assets/fonts-6/css/all.css";

const CV = (props) => {
  const { personalProps, contactInformationProps, educationProps, experienceProps } = props
  const { name, title, address, description } = personalProps
  const { phoneNumber, email } = contactInformationProps
  const  {degree, university, universityCity, } = educationProps
  const  { position, company, companyCity, } = experienceProps

  return(
    <div className='CV'>
      <header>
        <div className='header-main'>
          <h1>
            {name}
          </h1>
          <h2>
            {title}
          </h2>
        </div>
        <div className='contact-details'>
          <div><i class="fa-solid fa-location-pin"></i> {address}</div>
          <div><i class="fa-solid fa-phone"></i> {phoneNumber}</div>
          <div><i class="fa-solid fa-envelope"></i> {email}</div>
        </div>
      </header>
      <main>
        <div className='description'>
          {description}
        </div>
        <div className='education'>
          <h3>Education</h3>
          <div>
            <h4>{degree}</h4>
          </div>
          <div className='details'>
            {university} | {universityCity}
          </div>
        </div>
        <div className='work-experience'>
        <h3>Work Experience</h3>
          <h4>{position}</h4>
        <div className='details'>
          {company} | {companyCity}
        </div>
        </div>
      </main>
    </div>
  )
}

export default CV;
