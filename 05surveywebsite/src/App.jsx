import { useState } from 'react'
import './App.css'
import Header from "./components/Header/Header";
import { Outlet } from 'react-router-dom';
import Pointscard from './components/Points/Pointscard';
import Survey from './components/links/Survey';

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
