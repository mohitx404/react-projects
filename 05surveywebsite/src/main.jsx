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
const Survey = lazy(()=> import('./components/links/Survey.jsx'))

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
  </div>
)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Main/>} />
      <Route path='signin' element={<Signin/>} />
      <Route path='signup' element={<Signup/>} />
      <Route path='home' element={
          <Home/>
      } />
      <Route path='survey' element={
        // <ProtectedRoute>
        //   <Survey/>
        // </ProtectedRoute>
        <Survey/>
        }/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PointsProvider>
      <FirebaseProvider>
        <Suspense fallback={<LoadingSpinner />}>
          <RouterProvider router={router} />
        </Suspense>
      </FirebaseProvider>
    </PointsProvider>

  </StrictMode>
)