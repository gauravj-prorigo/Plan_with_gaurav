import { createContext } from "react";

export const ProductContext = createContext()

export function ProductProvider({children}){

    return(
        <ProductContext.Provider>
            {children}
        </ProductContext.Provider>
    )
}