import React from 'react'
import { useState ,useEffect} from 'react'


const Use = () => {
    const [city ,setCity] = useState("NewYork");
    console.log(city)
    useEffect(()=>{
        if(city === "NewYork"){
            setCity("Banglore")
        }
        else{
            setCity("Hyderabad")
        }

    },[city])
    console.log(city)

  return (
    <div>
        <center>
            <h1>i am from  {city}</h1>
        </center>
    </div>
  )
}

export default Use