/**
 * ! what is useEffect hook?
 * The useEffect Hook allows you to perform side effects in your components.
 * side effects are: fetching data, directly updating the DOM, and timers.
 * 
 *  useEffect accepts two arguments.
 *     1.) The first argument is callback function. Ye ek function hota hai jo aapka side-effect run karta hai.
 *     2.) The second argument is Dependency Array and it is optional. e batata hai ki effect kab run hoga:
                    | Dependency Array   | Behavior                                      |
                    | ------------------ | --------------------------------------------- |
                    | `[]` (empty array) | Sirf **1 baar run** hoga (component mount pe) |
                    | `[value]`          | Jab `value` change hoga, tab run hoga         |
                    | Not provided       | Har render pe run hoga (default behavior)     |


 *
 *? EX:          useEffect(() => {
 *?                 // logic here
 *?              }, [dependencies]);
 *

 *Todo         Effect Cleanup
 *              Some effects require cleanup to reduce memory leaks.
                Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
                We do this by including a return function at the end of the useEffect Hook.
 * 
 *!              EXAMPLE
 *             useEffect(() => {
                const timer = setInterval(() => console.log("running..."), 1000);
                
                return () => {
                    clearInterval(timer); // cleanup
                };
                }, []);


 */