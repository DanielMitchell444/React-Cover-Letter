import React, { Component, useState } from "react";
import styles from '../App.module.css';

const Personal = (props) => {
 return(
 <section className= {styles.section}>
 <div className="header">
  <h1>{props.title}</h1>  
 </div>
 <form className= {styles.inputs}>
  <input type = "text" 
  placeholder="First Name Last Name"
  value = {props.value}
  onChange = {props.onChange}

  >
    </input> 
  <input type = "text" 
  placeholder="Email"
  value = {props.value2}
  onChange = {props.onChange2}
  >
    
  </input> 
  <input type = "text" placeholder="Title"
  value = {props.value3}
  onChange = {props.onChange3}
  ></input>
  <input type = "text" placeholder="Phone Number"
  value = {props.value4}
  onChange = {props.onChange4}
  >
  </input> 
  <input type  = "text" placeholder="description"
  value = {props.value5}
  onChange = {props.onChange5}
  
  ></input>


 </form>

 

 </section>

 )
 }


export default Personal;