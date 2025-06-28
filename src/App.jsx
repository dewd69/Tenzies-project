import "./App.css"
import React from "react"
import Diecompo from "./components/dieComponent"
import { nanoid } from "nanoid"

export default function App() {
  const [numbers, setNumbers] = React.useState(generateAllNewDice())

  function generateAllNewDice() {
    const arr = []
    for (let i = 0; i < 10; i++) {
      arr.push({
                value: Math.ceil(Math.random() * 6), 
                isHeld: false,
                id: nanoid()
            })
    }
    return arr
  }
function rollDice(){
  setNumbers(oldDice => oldDice.map(die=> die.isHeld===false ? {...die,value: Math.ceil(Math.random() * 6) }: die))
}
function hold(id){
 setNumbers(oldDice => oldDice.map(die=>
  die.id === id ? {...die, isHeld: !die.isHeld } :
  die
 ))
}
  return (
    <main>
      <header className="head">Tenzies</header>
     
      <Diecompo 
      hold = {hold}
      numbers={numbers} />
      <button onClick={rollDice} className="die-Roller">Roll</button>
       <p className="instructions-title">🎯 How to Play</p>
        <p className="instructions-text">
            Roll until all dice show the same number. <br />
            Click a die to “freeze” it at its current value between rolls.
        </p> 
    </main>
  )
}
