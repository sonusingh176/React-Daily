import React, { useState, useEffect } from 'react';

const GoodExample = () => {
  const [count, setCount] = useState(0);

  // ✅ Yeh side-effect hai → isliye useEffect ke andar likhna chahiye
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]); // sirf tab chale jab count badle

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default GoodExample;
