export default function Diecompo(props) {
  const diceElements = props.numbers.map((dieobj) => (
    <button onClick={()=>props.hold(dieobj.id)} key={dieobj.id} className={`die ${dieobj.isHeld ? "dieClicked" : ""}`} >{dieobj.value}</button>
  ))

  return (
    <div className="box">
      {diceElements}
    </div>
  )
}
