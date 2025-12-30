import React from "react"
import { Link, NavLink } from "react-router-dom"
import logo from '../../assets/logo.png'
import { userLoggedIn } from "../../context/User"

function Header() {

  const user = userLoggedIn()   // 1 = logged in, 0 = logged out

  return (
    <header className="z-50 top-0 relative">

      {/* Background split */}
      <div className='absolute inset-0 grid grid-cols-2'>
        <div className='bg-black'></div>
        <div className='bg-[#f8f8fa]'></div>
      </div>

      <nav className="px-6 py-4 relative">
        <div className="grid grid-cols-3 items-center">

          {/* Logo */}
          <img className="h-16 w-auto" src={logo} alt="logo" />

          {/* 👉 Show NAV LINKS only if logged in */}
          {user.login ? (
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

          {/* 👉 Show Auth buttons ONLY when NOT logged in */}
          <div className="flex gap-4 justify-end">
            {!user.login && (
              <>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-gray-800 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition font-bold"
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="px-4 py-2 text-gray-800 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition font-bold"
                >
                  Log In
                </Link>
              </>
            )}
          </div>

        </div>
      </nav>
    </header>
  )
}

export default Header
