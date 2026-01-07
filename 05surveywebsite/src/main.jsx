import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import { FirebaseProvider } from './components/context/Firebase.jsx'
import { PointsProvider } from './components/context/Pointcontext.jsx'
import ProtectedRoute from './components/Main/ProtectedRoute.jsx'

// Lazy load components
const Main = lazy(() => import('./components/Main/Main.jsx'))
const Signin = lazy(() => import('./components/links/Signin.jsx'))
const Signup = lazy(() => import('./components/links/Signup.jsx'))
const Home = lazy(() => import('./components/links/Home.jsx'))
const Survey = lazy(() => import('./components/links/Survey.jsx'))
const About = lazy(() => import('./components/links/About.jsx'))
const Contact = lazy(() => import('./components/links/Contact.jsx'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Main />} />
      <Route path='signin' element={<Signin />} />
      <Route path='signup' element={<Signup />} />
      
      <Route path='home' element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }/>
      <Route path='survey' element={
        <ProtectedRoute>
          <Survey />
        </ProtectedRoute>
      }/>
      <Route path='about' element={
        // <ProtectedRoute>
        //   <About />
        // </ProtectedRoute>
        <About/>
      }/>
      <Route path='contact' element={
        <ProtectedRoute>
          <Contact />
        </ProtectedRoute>
      }/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PointsProvider>
      <FirebaseProvider>
          <RouterProvider router={router} />
      </FirebaseProvider>
    </PointsProvider>
  </StrictMode>
)