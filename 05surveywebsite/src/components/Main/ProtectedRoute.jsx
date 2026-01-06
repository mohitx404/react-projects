import React from 'react'
import { useFirebase } from '../context/Firebase'
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({children}) {
    const firebase = useFirebase()
    const navigate = useNavigate()
    if(firebase.isLoggedIn){
        return (
            <div className="flex items-center justify-center min-h-screen">
            <div className="text-xl">Loading...</div>
            </div>
        );
    }

    if(!firebase.isLoggedIn){
        return 
    }
}

export default ProtectedRoute