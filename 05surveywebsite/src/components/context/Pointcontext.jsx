import { createContext, useContext, useState, useCallback } from 'react'

const Pointcontext = createContext(null)

export const usePointContext = () => {
  const context = useContext(Pointcontext)
  if (!context) {
    throw new Error('usePointContext must be used within PointsProvider')
  }
  return context
}

export const PointsProvider = ({ children }) => {
  const MAX_POINTS = 5000
  const [points, setPoints] = useState(0)

  // Calculated value - no need for separate state
  const remainingPoints = MAX_POINTS - points

  // Add points with validation
  const addPoints = useCallback((amount)=>{
        setPoints(prev => Math.min(prev+amount,MAX_POINTS))
  },[])

  // Reset to zero
  const resetPoints = useCallback(() => {
    setPoints(0)
  }, [])

  // Check if max reached
  const isMaxReached = points >= MAX_POINTS

  const value = {
    points,
    remainingPoints,
    maxPoints: MAX_POINTS,
    addPoints,
    resetPoints,
    isMaxReached
  }

  return (
    <Pointcontext.Provider value={value}>
      {children}
    </Pointcontext.Provider>
  )
}

export default Pointcontext