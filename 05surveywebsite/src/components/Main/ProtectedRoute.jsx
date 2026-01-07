import React from 'react'
import { useFirebase } from '../context/Firebase'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({children}) {
    const firebase = useFirebase();

    if(!firebase.isLoggedIn){
        return <Navigate to='/' replace/>
        
    }

    return children;
}

export default ProtectedRoute