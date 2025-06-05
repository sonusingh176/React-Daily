import React from 'react'

const Cards = ({image,title,description,tech}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
    <img src={image} alt={title} className='w-full object-center h-48' />
    <div className='px-6 py-4'>
      <div className='font-bold text-xl mb-2'>{title}</div>
      <p className='text-gray-700 text-base'>{description}</p>
    </div>


    <div className="px-6 pt-4 pb-2">
       
          <span
            className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2"
          >
            #{tech}
          </span>
        
      </div>
  
 
   </div>
  )
}

export default Cards