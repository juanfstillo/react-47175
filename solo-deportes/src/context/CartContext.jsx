import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])


    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }))
        } else {
            setCart([...cart, { ...item, quantity}])
        }
    }
    
    const clearCart = () => setCart([])
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false
    
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))
  
    const getTotal = () => {
        let total = 0
            cart.forEach((element) => { total += (element.quantity * element.precio) })
        return total
    }

    const getQuantity = () => {
        let quantity = 0
        cart.forEach ((element) =>{
            quantity += element.quantity
        })
        return quantity
    }



    return (
    <CartContext.Provider value={{
        addProduct,
        clearCart,
        isInCart,
        removeProduct,
        cart,
        getTotal,
        getQuantity
    }}>
        {children}
    </CartContext.Provider>
    )

}
export default CartContext