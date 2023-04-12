import React from 'react'
import './App.css'
import Nav from './nav'
import Addnew from './Addnew';
import Retrieve from './Retrieve';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

function App() {
  return (
 <div>
  <Nav/>
     <BrowserRouter>
     <Routes>

       <Route path='/' element={<Addnew/>}> </Route>
       <Route path='/Retrieve' element={<Retrieve/>}> </Route>

     </Routes>
     
     </BrowserRouter>

    
 </div>
   
  );
}

export default App;
