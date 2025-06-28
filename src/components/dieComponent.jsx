export default function Diecompo({ numbers }) {
  const diceElements = numbers.map((dieobj, index) => (
    <button  key={index} className={`die ${dieobj.isHeld ? "dieClicked" : ""}`} >{dieobj.value}</button>
  ))

  return (
    <div className="box">
      {diceElements}
    </div>
  )
}
