import React from "react"
import { Link, NavLink } from "react-router-dom"
import logo from '../../assets/logo.png'

function Header() {
    return (
        <header>
            <nav className="bg-black px-6 py-4">
                <div className="grid grid-cols-3 items-center">

                    {/* Logo */}
                    <img className="h-16 w-auto" src={logo} alt="logo" />

                    {/* Nav Links - Centered */}
                    <ul className="flex gap-8 text-white justify-center">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `hover:text-orange-500 ${isActive ? "text-orange-700" : ""}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/stats"
                                className={({ isActive }) =>
                                    `hover:text-orange-500 ${isActive ? "text-orange-700" : ""}`
                                }
                            >
                                Stats
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `hover:text-orange-500 ${isActive ? "text-orange-700" : ""}`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `hover:text-orange-500 ${isActive ? "text-orange-700" : ""}`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                    {/* Auth Buttons */}
                    <div className="flex gap-4 justify-end">
                        <Link
                            to="/signup"
                            className="px-4 py-2 text-white border border-white rounded-full hover:bg-white hover:text-black transition font-bold"
                        >
                            Sign Up
                        </Link>
                        <Link
                            to="/login"     
                            className="px-4 py-2 text-white border border-white rounded-full hover:bg-white hover:text-black transition font-bold"
                        >
                            Log In
                        </Link>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header