import React, { useState } from 'react'

const Form = () => {

    const [user,setUser] = useState("")

    const [d,sd]=useState("");
    
    const c=()=>{
        sd(user)

    }

    const changeHandler=(event)=>{
        event.target.value
        console.log(event.target.value)
        setUser(event.target.value);
    }

  return (
    <div>
        <div className="flex-1,items-center justify-center h-screen flex-col">
            <h1>{d}</h1>
            <section>
                <div>
                    <input type="text"  placeholder='Enter your name'
                    onChange={changeHandler}
                    />
                    <br />
                    <br />
                    <button onClick={c}>submit</button>
                </div>

                <br />
                <h2>{user}</h2>
            </section>
        </div>

    </div>
  )
}

export default Form