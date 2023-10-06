import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { genOrder } from '../../firebase/firebase.js'
import { Form } from '../Form/Form'
export const Checkout = () => {
  
  const { cart, getTotal, clearCart } = useCartContext()
  const [orderId, setOrderId] = useState()
  const [buyer,setBuyer] = useState({
    Nombre:'',
    Email:'',
    Telefono:''
  })
  const generateOrder = async (data) => {
    try {      
      const order = await genOrder(data)
      setOrderId(order.id)
      clearCart()
    } catch (error) {
        console.log(error)
    }
  }


  const handleInputChange = (e) =>{
    setBuyer(({
      ...buyer,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const items = cart.map(e=>{
      return {
        id:e.id,
        title:e.title,
        price:e.precio,
        amount:e.quantity
       }
    })

    const dia = new Date()
    const total = getTotal()
    const data = {buyer, items, dia, total}
    generateOrder(data)

  }

  return (
    <>
      <h1>Finalizando Compra</h1>
      <hr />    
    { orderId ?
    (
      <h4>Su orden de compra es: {orderId}</h4>
    )
    :
    (
    <> 
      <Form buyer={buyer} handleSubmit={handleSubmit} handleInputChange={handleInputChange} />         
    </>
    )
  }
  </>
  )  
}