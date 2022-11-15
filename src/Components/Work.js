import React from "react";
import styles from '../App.module.css'
import { useState } from "react";

const Work = (props) => {

 const addSection = () => {


 }

 return(
 <div>
 <section className= {styles.section}>
 <div className="header">
  <h1>{props.title}</h1>  
 </div>
 <div className= {styles.inputs}>
  <input type = "text" 
  placeholder="Position"
  value = {props.value}
  onChange = {props.onChange}
  
  >

    </input> 
  <input type = "text" 
  placeholder="Company"
  value = {props.value2}
  onChange = {props.onChange2}
  >
    </input> 
  <input type = "text" 
  placeholder="City"
  value = {props.value3}
  onChange = {props.onChange3} 
  ></input> 
  <input type = "text" 
  placeholder="From"
  value = {props.value4}
  onChange = {props.onChange4}
  ></input> 
 </div>

 </section>
 </div>
 )
}

export default Work;