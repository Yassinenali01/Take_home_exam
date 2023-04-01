import React from 'react'
import { useState } from 'react'
import Rectangle from './Rectangle';


const Diamond = (props) => {
    const {setIsDropped , isDropped} = props;
    const [isDragged, setIsDragged] = useState(false);
    

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragged(true);
    } 

    const handleDrop = (event) => {
      event.preventDefault();
      setIsDragged(false);
      setIsDropped(true);
    }

    return (
      <div
        className='h-24 w-24 bg-white rotate-45'
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
      </div>
  )
}

export default Diamond
