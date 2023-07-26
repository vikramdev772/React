import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    </>
  )
}

function Button({count,setCount}){

  return <>
    <div style={{display:"flex",justifyContent:"space-between"}}>
      <Increase count = {count} setCount ={setCount}/>
      <Dcrease count = {count} setCount ={setCount}/>

    </div>
  
  </>
}

function Increase({count,setCount}){
  return <>
  <div>
  <Button variant={"contained"} onClick={()=>{
    setCount(count+1) 
  }}>
    Increase counter
  </Button>
    
  </div>
  
  </>
}


export default App


