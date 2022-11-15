import React from "react";
import Personal from "./Personal";
import Work from '../Components/Work';
import Resume from "./Resume";
import {Component, useState} from 'react'



const CV = () => {

   const [value, setValue] = useState('');

   const [value2, setValue2] = useState('');

   const [value3, setValue3] = useState('');

   const [value4, setValue4] = useState('');

   const [value5, setValue5] = useState('');

   const [value6, setValue6] = useState('');

   const [value7, setValue7] = useState('');

   const [value8, setValue8] = useState('');

   const [value9, setValue9] = useState('');

   const [value10, setValue10] = useState('');

    const handleChange = (e) => setValue(e.target.value)

    const handleChange2 = (e) => setValue2(e.target.value);

    const handleChange3 = (e) => setValue3(e.target.value);

    const handleChange4 = (e) => setValue4(e.target.value);

    const handleChange5 = (e) => setValue5(e.target.value);

    const handleChange6 = (e) => setValue6(e.target.value);
    
    const handleChange7 = (e) => setValue7(e.target.value);

    const handleChange8 = (e) => setValue8(e.target.value);

    const handleChange9 = (e) => setValue9(e.target.value);

    const handleChange10 = (e) => setValue10(e.target.value)
 

   return(
    <div>
    <Personal
    title = "Personal"
    value = {value}
    onChange = {handleChange}
    onChange2 ={handleChange2}
    value2 = {value2}
    onChange3 = {handleChange3}
    value3 = {value3}
    onChange4 = {handleChange4}
    value4 = {value4}
    onChange5 = {handleChange5}
    value5 = {value5}


    />


    <Work 
    title = "Work Experience"
    value = {value6}
    onChange = {handleChange6}
    onChange2 = {handleChange7}
    value2 = {value7}
    onChange3 = {handleChange8}
    value3 = {value8}
    onChange4 = {handleChange9}
    value4 = {value9}
    onChange5 = {handleChange10}
    value5 = {value10}

    />

    <Resume 
    value = {value}
    title = "Work Experience"
    onChange = {handleChange}
    value2 = {value2}
    value3 = {value3}
    value4 = {value4}
    value5 = {value5}
    value6 = {value6}
    value7 = {value7}
    value8 = {value8}
    value9 = {value9}
    value10 = {value10}
    />
    </div>
   )  
}

export default CV;