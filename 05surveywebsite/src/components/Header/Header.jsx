import React from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import SplitBackground from "../SplitBackground"
import Opinion from '../../assets/Opinion.png'

function Header() {
  const user = 0
  const location = useLocation()
  // Check if currently on any auth page
  const isOnAuthPage = location.pathname === '/signin' || location.pathname === '/signup'
  
  return (
    <header className="z-50 top-0 relative">
      
      <SplitBackground  leftColor="bg-black" rightColor="bg-[#f8f8fa]"/>
      
      <nav className="px-6 md:py-4 py-1 relative">
        <div className="grid grid-cols-3 items-center">
          <img className="h-16 w-auto" src={Opinion} alt="logo" />

          {user ? (
            <ul className="flex gap-8 justify-center">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `hover:text-orange-500 transition ${isActive ? "text-orange-700" : "text-white"}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/stats"
                  className={({ isActive }) =>
                    `hover:text-orange-500 transition ${isActive ? "text-orange-700" : "text-gray-800"}`
                  }
                >
                  Stats
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `hover:text-orange-500 transition ${isActive ? "text-orange-700" : "text-gray-800"}`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `hover:text-orange-500 transition ${isActive ? "text-orange-700" : "text-gray-800"}`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          ) : (
            <div></div>
          )}

          <div className="flex gap-4 justify-end">
            {!user && (
              <>  
                {location.pathname !== '/signup' && (
                  <Link
                    to="/signup"
                    replace={isOnAuthPage}  // Replace if on ANY auth page
                    className="px-4 py-2 text-gray-800 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition font-bold hidden md:block"
                  >
                    Sign Up
                  </Link>
                )}
                
                {location.pathname !== '/signin' && (
                  <Link
                    to="/signin"
                    replace={isOnAuthPage}  // Replace if on ANY auth page
                    className="px-4 py-2 text-gray-800 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition font-bold"
                  >
                    Log In
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header