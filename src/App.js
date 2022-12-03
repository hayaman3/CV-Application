import React, { useState } from "react";
import Form from "./components/Form";
import CV from "./components/CV";
import getLocalStorageData from './components/handleLocalStorage';


function App() {
  const [name, setName] = useState(getLocalStorageData("name"));
  const [title, setTitle] = useState(getLocalStorageData("title"));
  const [address, setAddress] = useState(getLocalStorageData("address"));
  const [description,setDescription] =useState(getLocalStorageData("description"))

  const personalProps = {
    name, setName,
    title, setTitle,
    address, setAddress,
    description, setDescription
  }

  const [phoneNumber, setPhoneNumber] = useState(getLocalStorageData("phoneNumber"));
  const [email, setEmail] = useState(getLocalStorageData("email"));

  const contactInformationProps = {
    phoneNumber, setPhoneNumber,
    email, setEmail
  }

  const [degree, setDegree] = useState(getLocalStorageData("degree"));
  const [university, setUniversity] = useState(getLocalStorageData("university"));
  const [universityCity, setUniversityCity] = useState(getLocalStorageData("universityCity"));

  const educationProps = {
    degree, setDegree,
    university, setUniversity,
    universityCity, setUniversityCity
  }

  const [position, setPosition] = useState(getLocalStorageData("position"));
  const [company, setCompany] = useState(getLocalStorageData("company"));
  const [companyCity, setCompanyCity] = useState(getLocalStorageData("companyCity"));

  const experienceProps = {
    position, setPosition,
    company, setCompany,
    companyCity, setCompanyCity,
  }

  const props = {
    personalProps,
    contactInformationProps,
    educationProps,
    experienceProps
  } 

  return (
    <div className="App">
      
      <Form {...props} />
      <CV {...props}/>
    </div>
  );
}

export default App;