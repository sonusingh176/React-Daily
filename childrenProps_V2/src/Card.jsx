import React from 'react'

const Card = ({children,name}) => {
    // console.log(props.children)
  return (
    <>
    
     <div>Card{name}</div>
     {children}
    </>
   
  )
}

export default Card