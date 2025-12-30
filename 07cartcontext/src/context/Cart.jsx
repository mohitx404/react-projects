import React from 'react'
import { createContext, useState } from 'react'

// creating a cart context using createContext fn
export const CartContext = createContext(null)

// custom hook for simplifying the use of useContext
export const useCart = () => {
    const cart = useContext(CartContext)
    return cart
}

// this context provider will provide the props to the respected child components inside the context provider
export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])
    return (
        <CartContext.Provider value={{ items, setItems }}>
            {children}
        </CartContext.Provider>
    )
}
