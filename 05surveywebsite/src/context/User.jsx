import React, { useState } from 'react'
import { createContext,useContext } from 'react'

export const UserContext = createContext(null)

export const userLoggedIn = () =>{
    const user = useContext(UserContext)
    return user
}
// dummy context just for checking the login feature
export const UserProvider = ({children}) => {
    const [login,setLogin] = useState(0)
    return (
        <UserContext.Provider value={{login,setLogin}}>
            {children}
        </UserContext.Provider>
    )
}

