import React, { useState } from 'react';

const BadExample = () => {
  const [count, setCount] = useState(0);

  // ❌ Yeh galat jagah hai — component body ke andar hai
  document.title = `Clickedd ${count} times`;

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default BadExample;

/**
 * 🔴 Problem:
Jab count badhta hai → component re-render hota hai

Har render pe ye line run hoti hai: document.title = ...

Agar complex DOM manipulation ya logic hai → app slow ho sakta hai

Yeh React ke render flow ko break karta hai


✅ 2. useEffect ke andar likhna (Sahi Tarika)
       GoodExample.jsx ko dekh lo


🧠 Concept:
Component body = voh jagah jahan tum return ke upar state, variable, function define karte ho
👉 Har render pe ye lines dubara execute hoti hain:

const [count, setCount] = useState(0);  // ✅ state define
document.title = `Clicked ${count}`;    // ❌ ye har render pe chalega (not controlled)

 */