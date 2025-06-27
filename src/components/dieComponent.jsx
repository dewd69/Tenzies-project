export default function Diecompo({ numbers }) {
  const diceElements = numbers.map((value, index) => (
    <button key={index} className="die">{value}</button>
  ))

  return (
    <div className="box">
      {diceElements}
    </div>
  )
}
