import { Children, createContext,useContext,useState } from "react";

export const ThemeContext = createContext();


export const ThemeContextProvider =({children})=>{
    const [theme,setTheme] = useState("light");

    const toggleTheme=()=>{
        setTheme((prev)=>(prev ==="light" ? "dark" :"light"))
    }

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}