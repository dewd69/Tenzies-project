import "./App.css"
import React from "react"
import Diecompo from "./components/dieComponent"

export default function App() {
  const [numbers, setNumbers] = React.useState(generateAllNewDice())

  function generateAllNewDice() {
    const arr = []
    for (let i = 0; i < 10; i++) {
      arr.push({
                value: Math.ceil(Math.random() * 6), 
                isHeld: true
            })
    }
    return arr
  }
function rollDice(){
  setNumbers(generateAllNewDice())
}
  return (
    <main>
      <Diecompo numbers={numbers} />
      <button onClick={rollDice} className="die-Roller">Roll</button>
    </main>
  )
}
