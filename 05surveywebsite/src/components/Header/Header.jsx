import React, { useState, useRef, useEffect } from "react"
import { Link, NavLink, useLocation,useNavigate } from "react-router-dom"
import SplitBackground from "../SplitBackground"
import Opinion from '../../assets/Opinion.png'
import { useFirebase } from '../context/Firebase'
import { User, LogOut, Info, Mail } from "lucide-react"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const location = useLocation()
  const isOnAuthPage = location.pathname === '/signin' || location.pathname === '/signup'
  const firebase = useFirebase()
  const navigate = useNavigate()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  const handleLogout = () => {
    firebase.doSignOut();
    setIsMenuOpen(false)
    navigate('/')
  }

  return (
    <header className="z-50 top-0 sticky  bg-white md:bg-none">
      {
        !firebase.isLoggedIn && <SplitBackground leftColor="bg-black" rightColor="bg-[#f8f8fa]" />
      }
      

      <nav className="px-6 md:py-4 py-1 relative">
        <div className="grid grid-cols-3 items-center">
          <img className="h-16 w-auto" src={Opinion} alt="logo" />

          {firebase.isLoggedIn && location.pathname !== '/' ? (
            <ul className="hidden md:flex gap-8 justify-center">
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `hover:text-orange-500 transition ${isActive ? "text-orange-700" : "text-gray-800"}`
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

          <div className="flex gap-4 justify-end items-center">
            {!firebase.isLoggedIn ? (
              <>
                {location.pathname !== '/signup' && (
                  <Link
                    to="/signup"
                    replace={isOnAuthPage}
                    className="px-4 py-2 text-gray-800 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition font-bold hidden md:block"
                  >
                    Sign Up
                  </Link>
                )}

                {location.pathname !== '/signin' && (
                  <Link
                    to="/signin"
                    replace={isOnAuthPage}
                    className="px-4 py-2 text-gray-800 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition font-bold"
                  >
                    Log In
                  </Link>
                )}
              </>
            ) : location.pathname !== '/' && (
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition flex items-center justify-center text-white"
                  aria-label="User menu"
                >
                  <User size={20} />
                </button>

                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                    <Link
                      to="/about"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition text-gray-800"
                    >
                      <Info size={18} />
                      <span>About</span>
                    </Link>
                    
                    <Link
                      to="/contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition text-gray-800"
                    >
                      <Mail size={18} />
                      <span>Contact</span>
                    </Link>

                    <hr className="my-1 border-gray-200" />

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-red-50 transition text-red-600"
                    >
                      <LogOut size={18}/>
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header