import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/links/Home'
import About from './components/links/About'
import Contact from './components/links/Contact'
import {Outlet} from 'react-router-dom' 

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
