import { useRef, useState } from "react"
import "./App.css"

function App() {
  // const [count, setCount] = useState(0)
  const [time, setTime] = useState(0)

  // // let val = 1
  // let val = useRef(0)
  // // here val holds object
  // // in that object there is current property which has value 0 (value inside useRef)
  // // using useRef you can hold value accross re-renders (there is no re-render like state)

  // //--> Main use of useRef is that you can directly access or change element from DOM <--

  // let btnRef = useRef()

  // const handleIncrement = () => {
  //   // val = val + 1
  //   val.current = val.current + 1
  //   console.log("value of val", val.current)
  //   // Page re-renders everytime after clicking on increment, because count is changing - the value of val resets to 1 and shown output 2 always
  //   // Accross re-renders val is not able to persist its value
  //   setCount((count) => count + 1)
  // }

  // const changeColor = () => {
  //   btnRef.current.style.backgroundColor = "red"
  // }

  let timeRef = useRef(null)

  const startTime = () => {
    timeRef.current = setInterval(() => {
      setTime((time) => time + 1)
    }, 1000)
  }
  const stopTime = () => {
    clearInterval(timeRef.current)
    timeRef.current = null
  }
  const resetTime = () => {
    stopTime()
    setTime(0)
  }

  return (
    <>
      {/* <h1>count is {count}</h1>
      <div className="card">
        <button ref={btnRef} onClick={handleIncrement}>
          Increment
        </button>
        <br />
        <br />
        <button onClick={changeColor}>Change colour of button</button>
      </div> */}
      <h1>Time is {time}</h1>
      <button onClick={startTime}>Start time</button>
      <button onClick={stopTime}>Stop time</button>
      <button onClick={resetTime}>Reset time</button>
    </>
  )
}

export default App
