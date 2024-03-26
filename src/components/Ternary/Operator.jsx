import React from 'react'
import { useState } from 'react';

const Operator = () => {
    const [fruit ,setFruit] = useState(true);
    console.log(fruit)

  return (
    <div>
        <center>
            <h1> {fruit?`apple`:`mango `}</h1>
            <h1>i eat {fruit}</h1>
        </center>
    </div>
  )
}

export default Operator