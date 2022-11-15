
import Navigation from './UI/Navigation';
import CV from '../src/Components/CV';
import Section from './Components/Personal';
import Resume from '../src/Components/Resume'
import { Component, useState } from 'react';


function App(){

  const [value, setValue] = useState({
    firstName: '',
    email: '',
    title: '',
    phone: '',
    describe: ''  
   });

   const handleChange = (evt) => {
    const value = evt.target.value;

    setValue({
     ...value,
     [evt.target.name]: value
    })
   }

  return (
    <div>
     <Navigation 
     />
     <CV
     value = {value.firstName}
     onChange = {handleChange}
     />
    </div>
  );
  }


export default App;
