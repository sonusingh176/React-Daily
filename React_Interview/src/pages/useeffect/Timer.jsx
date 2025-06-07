import React, { useEffect, useState } from 'react'

const Timer = () => {
    
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //       setCount((prev) => prev + 1);
    //     }, 1000);
      
    //     return () => clearTimeout(timer); // 🔁 cleanup
    //   }, [count]); // ✅ runs only when count changes
      
    useEffect(() => {
  setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);
}, []);
   

  return (
    <h1>I've rendered {count} times!</h1>
  )
}

export default Timer