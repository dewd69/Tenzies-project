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
      <p className="para">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <Diecompo 
      hold = {hold}
      numbers={numbers} />
      <button onClick={rollDice} className="die-Roller">Roll</button>
    </main>
  )
}
