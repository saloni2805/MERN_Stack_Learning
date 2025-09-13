import { useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <br />
      <ChildA prop="Hey" />

    </>
  )
}

export default App
