import { createContext, useContext ,useReducer } from "react";

//**Store */

const initialState = {auth:false}


const authContext = createContext(initialState);

export function reducer(state,action){
    switch(action.type){
        case 'login':
            return {auth:true};

        case 'logout':
            return {auth:false};

        default:
            throw new Error()
    }
}

//**Auth Provider */

export function AuthProvider({children}){
   const [authed , dispatch] = useReducer(reducer,initialState)

    return <authContext.Provider value={[authed , dispatch]}>{children}</authContext.Provider>
}

//** Own Consumer hook */


export default function AuthConsumer(){
  return  useContext(authContext)
}

