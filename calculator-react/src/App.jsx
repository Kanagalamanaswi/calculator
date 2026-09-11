import { useState } from 'react'
import './App.css'

function App() {
  const [numberA, setNumberA] = useState(0)
  const [numberB, setNumberB] = useState(0)
  const [result, setResult] = useState(0)

  function handleAddition() {
    setResult(Number(numberA) + Number(numberB))
  }

  function handleSubtraction() {
    setResult(Number(numberA) - Number(numberB))
  }

  return (
    <div>
      <h1>React Calculator</h1>

      <label>Enter a number A:</label>
      <input
        type="number"
        value={numberA}
        onChange={(e) => setNumberA(e.target.value)}
      />

      <br />

      <label>Enter a number B:</label>
      <input
        type="number"
        value={numberB}
        onChange={(e) => setNumberB(e.target.value)}
      />

      <br />

      <label>Result:</label>
      <input
        type="number"
        value={result}
        readOnly
      />

      <br />

      <button onClick={handleAddition}>Addition</button>
      <button onClick={handleSubtraction}>Subtraction</button>
    </div>
  )
}

export default App