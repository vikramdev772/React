import React from 'react'
import { useState } from 'react'


const Main = () => {

    const [name , setName] = useState("Mark");

    console.log(name);

    // setName("Stark")

    if(name==="Mark"){
        setName("Steve");

    }
    // else{
    //     setName("tom ")
    // }



  return (
    <div>
        <div>

            <center>
            <h1>{name}</h1>
            </center>
        </div>

    </div>
  )
}

export default Main