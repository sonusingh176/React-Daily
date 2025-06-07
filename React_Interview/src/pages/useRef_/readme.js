/**
 * ! what is useRef hook ?
 * ? The useRef Hook allows you to persist values between renders.
 * ? It can be used to store a mutable value that does not cause a re-render when updated.
 * ? It can be used to access a DOM element directly.
 * 
 * * React me DOM element ko access karne ke liye hum mostly useRef() ka use karte hain.
 * * Yeh ek controlled aur React-friendly way hai — document.getElementById() ka alternative.

 * ! Accessing DOM Elements in React – Step by Step
 * In general, we want to let React handle all DOM manipulation.
 * But there are some instances where useRef can be used without causing issues.
 *  ✅ Step 1: useRef() import karo
 *      import { useRef } from 'react';
 *
 *  ✅ Step 2: Ek ref object banao
 *      const inputRef = useRef(null);  // initially null
 * 
 *  ✅ Step 3: ref ko JSX ke DOM element me attach karo
 *      <input ref={inputRef} type="text" />
 * 
 * ✅ Step 4: Jab access chahiye (jaise button click), tab use karo:
 *      inputRef.current.focus();  // DOM element ko focus karo
 *      inputRef.current.value = "Hello Sonu!";  // value update
 *      inputRef.current.style.backgroundColor = "yellow";  // style change
 * 
 *  
 * 🧠 Summary Table:
 *  | Step | Action                      | Code                             |
    | ---- | --------------------------- | -------------------------------- |
    | 1️⃣  | Hook import karo            | `import { useRef } from 'react'` |
    | 2️⃣  | Ref banao                   | `const inputRef = useRef(null)`  |
    | 3️⃣  | Ref ko JSX element me lagao | `<input ref={inputRef} />`       |
    | 4️⃣  | Access DOM using `.current` | `inputRef.current.focus()`       |

 */