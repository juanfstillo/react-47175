import React, { useState } from 'react'

export const ItemCount = ({item, initial, onAdd}) => {

    const [count, setCount] = useState(initial)

    const {stock} = item

    const addCounter = () => {
        count < stock && setCount( count + 1 )
    }

    const subtractCounter = () => {
        count > initial && setCount( count - 1 )
    }
  

  return (
    <div className='container'>
        <p>Precio: ${item.precio}</p>
        <p>Sotck: {item.stock}</p>
        <p className='counter'>{count}</p>
        <div className='container d-flex justify-content-center'>
            <button className='btn btn-secondary m-1' onClick={subtractCounter}>-</button>
            <button className='btn btn-secondary m-1' onClick={addCounter}>+</button>
        </div>
        <button className='btn btn-primary m-2' onClick={() => onAdd(count)}>Añadir al carrito</button>
    </div>
  )
}
