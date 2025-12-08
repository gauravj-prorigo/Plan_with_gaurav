import { createContext, useState } from "react";

export const ThemeContext = createContext()

export function ThemeProvider({children}){
    const [theme ,setTheme] = useState('light')

    function toggletheme(){
        if(theme === 'light'){
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
    }
    return(
        <ThemeContext.Provider value={{theme,toggletheme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}