import { useState } from "react"

const ItemCount = ({initial, stock, onAdd}) => {
  const [counter, setCounter] = useState(initial)

  const handleAdd = () => {
    if(counter < stock){
        setCounter(counter+1);
    }
  }
  const handleSubtract = () => {
    if(counter > initial){
      setCounter(counter-1);
  }
  }
  const handleOnAdd = () => {
    onAdd(counter);
  }

  return (
    <div>
      <button className="btn btn-primary m-2" onClick={handleAdd}>+ 1</button> 
      <label>
        <strong>{ counter }</strong>
      </label>
      <button className="btn btn-primary m-2" onClick={handleSubtract}>- 1</button>
      <div className="mt-1">
        <button className="btn btn-primary" onClick={handleOnAdd}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount