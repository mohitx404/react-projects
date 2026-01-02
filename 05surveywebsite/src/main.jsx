import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { Signin, Signup } from "./components/links/index.jsx"
import Main from './components/Main/Main.jsx';
import { FirebaseProvider } from './components/context/Firebase.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Main />} />
      <Route path='signin' element={<Signin />} />
      <Route path='signup' element={<Signup />} />
    </Route>


  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </StrictMode>
)