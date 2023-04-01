import React from 'react'
import { useState } from 'react';
import Diamond from './Diamond';
import Circle from './Circle';
import Message from './Message';

const Rectangle = () => {
    

    const [isDropped, setIsDropped] = useState(false)
    const [isMessageVisible, setIsMessageVisible] = useState(false)
    const [isDragged, setIsDragged] = useState(false)

    const handleDrop = () => {
      setIsMessageVisible(true);
    }

    const handleDragOver = (event) => {
      event.preventDefault();
      setIsDragged(true);
    } 
 

  return (
  
  <div >
    <div className=' flex justify-between space-x-24  items-center p-5 bg-black mt-24 '>

        <div className={isDropped ? 'hidden' : ''}>
          <Circle />
        </div>
        
        <div >
          <Diamond  setIsDropped ={setIsDropped} isDropped ={isDropped} />
        </div>
        
        <div className= 
        {isDropped ? 'flex justify-center bg-blue-700 rotate-12' : ' flex justify-center  bg-green-700 h-24 w-24' } 
        onDragOver={handleDragOver}
        >
          <div className='p-4'>
            {isDropped ?  <Circle   />: null}
          </div>
            
      </div>        
    </div>

    {isDropped ? setTimeout(() => handleDrop(), 1000) : null}

    <div  className={isMessageVisible ? '' : 'hidden'}>
      <Message />
    </div>
  </div>
  )
  
}

export default Rectangle
