import React from 'react'

const Count = ({text,count}) => {
  console.log(`Rendring ${text}`);
  
  return (
    <div>
      <p>
      {text} - {count}
      </p> 
        </div>
  )
}

export default React.memo(Count)