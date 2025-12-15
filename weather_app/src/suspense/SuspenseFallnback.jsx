import React from 'react'
import { RiseLoader } from "react-spinners";
const SuspenseFallnback = () => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center', width:'100%', height:'100vh',backgroundColor:'white' ,color:'black',flexDirection:'column'}}>
      <h1>Content is loading please wait...</h1>
      <h3>(may be your Internet is slow)</h3>
      <RiseLoader style={{margin:'20px'}}/>
    </div>
  )
}

export default SuspenseFallnback
