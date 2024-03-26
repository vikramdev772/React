import { useState } from "react";
import {Button,Card,Typography} from '@mui/material'
import "./App.css";
import Parent from "./components/props/Parent";

function App() {
  const [count, setCount] = useState(0);


  const user={
    name:"Bruce",
    city:"new york",
    area:"Time squares"
  }

  return (
    <>
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ padding: 20, width: 500 }}>
          <Typography variant="h5">Welcome to counter game</Typography>
          <br />
          <Buttons count={count} setCount={setCount} />
          <CountComponent/>
        </Card>
      </div> */}
    <Parent name={user.name}/>
      

    </>
  );
}

function Buttons({ count, setCount }) {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Increase count={count} setCount={setCount} />
        <Decrease count={count} setCount={setCount} />
      
      </div>
    </>
  );
}

function Increase({ count, setCount }) {
  return (
    <>
      <div>
        <Button
          variant={"contained"}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increase counter
        </Button>
      </div>
    </>
  );
}

function Decrease({ count, setCount }) {
  return (
    <>
      <div>
        <Button
          variant={"contained"}
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrease counter
        </Button>
      </div>
    </>
  );
}

function CountComponent(){
  return <>
  <div>
    <Typography variant='h5' textAlign={"center"}>
      {count}
    </Typography>
  </div>
  </>
}


export default App;
