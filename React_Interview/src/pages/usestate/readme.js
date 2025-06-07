/**
 * what is useState hook in react?
 * ? usestate is a react hook, which creates an "state variable". which helps us to track
 * ? state in components and updates the user interface when state changes.
 * 
 * ? useState accepts an initial state and return two value: 
 * ?  (1) the current state
 * ?  (2) A function that updates the state.
 *   ! const [currentState , setCurrentState] =useState(InitailState)
 * 
 * TODO : Now let's take an example to understand better:
 * 
 * 
 * ?     import React, { useState } from 'react'
        
        const Car = () => {
        
            const [car,setCar]=useState({
                brand: "Ford",
                model: "Mustang",
                year: "1964",
                color: "red",
            });
        
 *?         const updateColor =()=>{
 *?           setCar(previousState =>{ return {...previousState ,color:"blue"}})
 *?         }
        
            return (
                <>
                <h1>My {car.brand}</h1> //* READ THE STATE
                <p>
                    It is a {car.color} {car.model} from {car.year}.
                </p>
            
                <button type='button' onClick={updateColor}>blue</button> //! UPDATE THE STATE
                </>
            )
        }
        
        export default Car
 */

//! ------------ Important Points ---------------------

/**
 * TODO      1.)Updating Objects and Arrays in State
 * 
 *  When state is updated, the entire state gets overwritten.
 *   What if we only want to update the color of our car?
 *?  ✅ Q:kya hum setCar({color: "blue"}), se car ka color change kr sakte hai?
     ❌ Nahi!, because this would remove the brand, model, and year from our state.
 *    
 *?  ✅ Q: Kya hum car.color = 'blue' likh ke color update kar sakte hain?
 *   ❌ Nahi!
 *   React me aap state ko directly mutate/change nahi kar sakte. Isse component re-render nahi hoga.
 * 
 *?   ❗ React Rule:
 *     "Never update state directly." Always use the update function (like setCar) and copy the old data using spread operator.
 * 
 *?   ✅ React me State Update Karne ka Sahi Tarika
 *        1. setState function ka use karte hain (jaise setCar, setCount, etc.)  
 *TODO             |--- 🧠 Agar state primitive (number, string, boolean) ho: 
                             const [count, setCount] = useState(0);
                            setCount(1); ✅  // Direct new value de sakte ho
 *TODO             |--- 🧠 Agar state object ho:: 
                            Spread operator (...) use karo taki purana data preserve rahe.

                            const [car, setCar] = useState({ brand: "Ford", color: "Red" });

                            setCar(prev => ({
                            ...prev,           // copy all existing keys
                            color: "Blue"      // sirf color update
                            }));

 *TODO             |--- 🧠 Agar state array ho: 
                          const [fruits, setFruits] = useState(["apple"]);

                          setFruits(prev => [...prev, "banana"]); // naya item add
 *
 * 
 * 
 *? ✅ Golden Rules:
    | 🔹 Rule                                 | ✔️ Explanation                         |
    | --------------------------------------- | -------------------------------------- |
    | Don’t modify state directly             | React won't re-render                  |
    | Use `setState` function always          | Triggers re-render                     |
    | Use spread operator for objects/arrays  | Old data ko preserve karne ke liye     |
    | Functional update preferred (prev => …) | Accurate hota hai async update ke time |
 * 
 * 
 * 
 * 


 */


