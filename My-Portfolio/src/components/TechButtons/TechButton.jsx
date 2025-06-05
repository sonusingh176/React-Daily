import React from 'react'

const TechButton = ({name,isActive, onClick }) => {
  return (
    <button
             className={`px-6 py-2 m-1 rounded font-medium capitalize 
               ${isActive
                 ? "bg-red-600 text-white"
                 : "bg-gray-200 text-gray-700 hover:bg-red-500 hover:text-white"
             }`}
             onClick={onClick}
           >
            {name}
           </button>
  )
}

export default TechButton