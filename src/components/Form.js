import React from 'react';
import Personal from './Personal';
import ContactInformation from './ContactInformation';
import Education from './Education';
import Experience from './Experience';

const Form = (props) => {
  const {personalProps, contactInformationProps, educationProps, experienceProps} = props

  return (
    <div className='form'>
      <Personal {...personalProps}/>
      <ContactInformation {...contactInformationProps}/>
      <Education {...educationProps}/>
      <Experience {...experienceProps}/>
    </div>
  );
};

export default Form;
