import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5;
  const [counter, setCounter] = useState(0)
  console.log(useState(1))

  const addValue = () => {
    // console.log("value added", Math.random())
    setCounter(counter + 1)
    console.log("counter---------", counter)
    // counter = counter + 1
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Chai or react</h1>
      <h2>Counter value: {counter}</h2>
      <button
        onClick={addValue}
      >Add Value</button>
      <br />
      <button
        onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
