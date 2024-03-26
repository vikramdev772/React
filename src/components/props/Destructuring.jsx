import React from 'react'

const Destructuring = (props) => {
    const {model,year,color,service} = props.lap 
    console.log(props)
  return (
    <div>
        <section>
            <div>{model}</div><div>{}</div>
            <div>{color}</div>
            <div>{year}</div>
            <div>{service}</div>
        </section>

    </div>
  )
}

export default Destructuring