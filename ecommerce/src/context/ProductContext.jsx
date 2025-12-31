import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const initialCart = JSON.parse(localStorage.getItem("cart"))

  const [item, setItem] = useState(initialCart);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(item));
  }, [item]);
  return (
    <ProductContext.Provider value={{ item, setItem }}>
      {children}
    </ProductContext.Provider>
  );
}
