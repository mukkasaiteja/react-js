// import Temp from './componets/Temp';
import './App.css';
import React, { useState } from 'react';



function App() {
  const [count,setCount]=useState(0);
  
    const inu =()=>{
      setCount(count+1);}
    const dec=()=>{
      setCount(count-1);
    }
  return (
    

  <div>
    <button onClick={inu} >+</button>
    <h1>{count}</h1>
    <button onClick={dec}>-</button>
  </div>
    
  )}

export default App;
