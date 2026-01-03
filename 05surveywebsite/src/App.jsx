import { useState } from 'react'
import './App.css'
import Header from "./components/Header/Header";
import { Outlet } from 'react-router-dom';
import { Home } from './components/links';
import Points from './components/Points/Points';
function App() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
