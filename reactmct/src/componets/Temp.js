import React, {useEffect, useState } from 'react'
import "./weatherapp.css"

const Temp = () => {
    const [city,setCity] = useState("");
    const [search,setSearch] = useState("mumbai")

    useEffect(()=>{
    const apikey = async () =>{
        const key=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3357a0d5e27b35fd2dca00dd4167d141`
        const response = await fetch(key);
        
        const resJson= response.json();
       
        setCity(resJson.main);
        console.log(resJson);

    }

     apikey()
    },[setSearch])

  return (
    <div className='main'>
      <div div className='search'>
        <input type="search" className='input' onChange={(e)=>{setSearch(e.target.value)}}/></div>
        {!city? (

<p> No Data Found </p>

) : ( <div>



<div className="info">



{/* <h2 className="location"> <i className="fas fa-street-view"> </i>{search} <h1 className="temp"></h1> {city.temp} Cel <h3 className="tempmin_max"> Min 5.25 Cel Max: 5.25°Cel </h3>

</h2> */}




</div>



</div> 
  )
}
</div>)}
export default Temp;
