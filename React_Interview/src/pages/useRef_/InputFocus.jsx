import React, { useRef } from 'react'

const InputFocus = () => {
    const inputRef = useRef(null) // reference create

    const handleClick =()=>{
        inputRef.current.style.backgroundColor = 'lightyellow'; //DOM access
    }
  return (
    <>
        <input ref={inputRef} type="text" placeholder='Type here ....'  style={{ padding: '10px', fontSize: '16px' }}/>
        <button onClick={handleClick}>Focus Input</button>
    </>
  )
}

export default InputFocus