import React from "react";
import styles from '../App.module.css'

const Resume = (props) => {
 return(
 <div className = {styles.resume}>
 <div className = {styles.header}>
   <h1>{props.value}</h1>
   <p>{props.value2}</p>
   <h3>{props.value3}</h3> 
   <h4>{props.value4}</h4>
   <h5>{props.value5}</h5>
 <hr></hr>
 <div className= {styles.body}>
 <h1>{props.title}</h1>
   <p>{props.value6}</p>
   <p>{props.value7}</p>
   <p>{props.value8}</p>
   <p>{props.value9}</p>
   <p>{props.value10}</p>
 </div>
   </div>
 </div>
 )
}

export default Resume;