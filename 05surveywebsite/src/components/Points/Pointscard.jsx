import React from 'react'
import { Coins, CircleCheck } from "lucide-react"
import { usePointContext } from '../context/Pointcontext'

export default function Pointscard() {
  const { points, remainingPoints, maxPoints, isMaxReached } = usePointContext()
  
  const percentage = (points / maxPoints) * 100

  return (
    <div className='point-card-container mt-8'>
      <div className='bg-white md:rounded-none md:shadow-none rounded-lg shadow-md p-6 w-full max-w-sm'>
        {/* Header */}
        <div className='flex items-center gap-3 mb-4'>
          <div className='p-2 bg-orange-100 rounded-full'>
            <Coins size={20} className='text-orange-500' />
          </div>
          <div>
            <p className='text-gray-500 text-sm'>Total Points</p>
            <p className='text-black text-2xl font-bold'>{points}</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className='flex items-center gap-3 mb-3'>
          <div className='flex-1 bg-gray-200 rounded-full h-3 overflow-hidden'>
            <div 
              className='bg-gradient-to-r from-orange-400 to-orange-600 h-full transition-all duration-500 ease-out'
              style={{ width: `${percentage}%` }}
            />
          </div>
          <CircleCheck 
            size={24} 
            className={`transition-colors ${
              isMaxReached ? 'text-green-500' : 'text-gray-300'
            }`}
          />
        </div>

        {/* Footer */}
        <div className='flex justify-between items-center'>
          <p className='text-gray-600 text-sm'>
            <span className='text-gray-900 font-semibold'>{remainingPoints}</span> points to go
          </p>
          <p className='text-gray-500 text-sm'>{percentage.toFixed(0)}%</p>
        </div>
      </div>
    </div>
  )
}