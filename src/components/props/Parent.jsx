import React from 'react'
import Destructuring from './Destructuring'

const Parent = (props) => {

    const lap={
        model:"Inspiron 16 plus",
        year:2024,
        service:"Dell",
        color:"sliver"

    }
  return (
    <div>
        <center>
            <h1>{props.name}</h1>
            <Destructuring  lap={lap} />
        </center>
    </div>
  )
}

export default Parent