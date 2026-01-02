import React from 'react'

function SplitBackground({
    leftColor,
    rightColor, 
    className=""
}) {
  return (
    <div className='md:absolute md:inset-0 md:grid md:grid-cols-2 '>
        <div className={leftColor}></div>
        <div className={rightColor}></div>
    </div>
  )
}

export default SplitBackground