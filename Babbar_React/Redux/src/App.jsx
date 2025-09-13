import "./App.css"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import {
  decrement,
  increment,
  reset,
  incrementByAmount,
} from "./features/counterSlice"
import { useState } from "react"

function App() {
  const [amount, setAmount] = useState(0)

  const count = useSelector((state) => state.counter.value)
  console.log(count)
  const dispatch = useDispatch()

  let handleIncrement = () => {
    console.log("Button clicked")
    dispatch(increment())
  }

  let handleDecrement = () => {
    console.log("Button clicked")
    dispatch(decrement())
  }

  let handlereset = () => {
    console.log("Button clicked")
    dispatch(reset())
  }

  let handleIncAmnt = () => {
    dispatch(incrementByAmount(amount))
    setAmount(0)
  }

  return (
    <>
      <div className="container">
        <button onClick={handleIncrement}> + </button>
        <p>Count: {count}</p>
        <button onClick={handleDecrement}> - </button>
        <br />
        <br />
        <button onClick={handlereset}> Reset </button>
        <br />
        <br />
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="value"
        />
        <br />
        <br />
        <button onClick={handleIncAmnt}> Inc by Amnt </button>
      </div>
    </>
  )
}

export default App
