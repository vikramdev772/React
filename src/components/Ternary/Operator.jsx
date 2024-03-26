import React from 'react'
import { useState } from 'react';

const Operator = () => {
    const [fruit ,setFruit] = useState(false);
    console.log(fruit)

  return (
    <div>
        <center>
            <h1> i eat {fruit?`apple`:`mango `}</h1>
            
        </center>
    </div>
  )
}

export default Operator