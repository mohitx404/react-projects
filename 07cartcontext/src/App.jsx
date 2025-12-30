import { useState } from 'react'
import './App.css'
import Items from './components/items'
import Cart from './components/cart'

function App() {

  return (
    <>
      <div className='item-cart'>
        <h1>Shopping Items</h1>
        <Items name="Asus TUF A15" price={1000} />
        <Items name="POCO F5" price={350} />
        <Items name="Kingston Pendrive 32GB" price={10} />
      </div>
      <Cart/>
    </>
  )
}

export default App
