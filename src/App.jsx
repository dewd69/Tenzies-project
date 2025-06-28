import "./App.css"
import React from "react"
import Diecompo from "./components/dieComponent"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

export default function App() {
  const [numbers, setNumbers] = React.useState(()=>generateAllNewDice())
  const gameWon = numbers.every(die => die.isHeld) &&
        numbers.every(die => die.value === numbers[0].value)
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
  if(!gameWon)
    {setNumbers(oldDice => oldDice.map(die=> die.isHeld===false ? {...die,value: Math.ceil(Math.random() * 6) }: die))}
  else {
    setNumbers(generateAllNewDice())
  }

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
     {gameWon && <Confetti />}
      <Diecompo 
      hold = {hold}
      numbers={numbers} />
      <button onClick={rollDice} className="die-Roller">{gameWon ? "New game" : "Roll"}</button>
       <p className="instructions-title">🎯 How to Play</p>
        <p className="instructions-text">
            Roll until all dice show the same number. <br />
            Click a die to “freeze” it at its current value between rolls.
        </p> 
    </main>
  )
}
