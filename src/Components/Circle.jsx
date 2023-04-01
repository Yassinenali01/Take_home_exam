import React from 'react'
import { useState } from 'react'


const Circle = () => {



  const handleDragStart = (event) => {
    
      event.dataTransfer.setData('id', event.target.id);

    console.log(event.target.id)
  }

    
   
      

  return (
    <div >
      <div id='circle' draggable className=' h-16 w-16 bg-red-700 rounded-full cursor-pointer ' onDragStart={handleDragStart} >
      
      </div>

    </div>
    
  )
}

export default Circle
