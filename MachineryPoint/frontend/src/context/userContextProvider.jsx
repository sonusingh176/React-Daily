
import { createContext, useState } from "react"

const UserContext = createContext(null);



export function UserContextProvider({children}) {

    const [userData, setUserData] =  useState({})

    const values = {
        userData: userData,
        setUserData: setUserData
    }
    

   return <UserContext.Provider value={values}>
        {children}
    </UserContext.Provider>
}


export default UserContext;