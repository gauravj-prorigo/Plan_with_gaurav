import { createContext, useState } from "react";

export const ProductContext = createContext()

export function ProductProvider({children}){
    const [item,setItem] = useState([])
    return(
        <ProductContext.Provider value={{item,setItem}}>
            {children}
        </ProductContext.Provider>
    )
}