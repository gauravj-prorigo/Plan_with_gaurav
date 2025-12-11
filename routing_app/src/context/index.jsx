import { createContext, useState } from "react";

export const theamcontext = createContext()

export function Usetheamprovider({children}){
    const [theme ,settheme] = useState('light')
    function toggleTheme(){
        if(theme ==='light'){
            settheme('dark')
        }
        else{
              settheme('light')
        }
    }
    return(
       <theamcontext.Provider value={{theme,toggleTheme}}>
        {children}
       </theamcontext.Provider>
    )
}