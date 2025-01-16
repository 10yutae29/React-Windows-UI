import { createContext, useState } from "react";
interface ZIndexContext {
  zIndex?: number;
  addZIndex?(): void;
}
export const zIndexContext = createContext<ZIndexContext>({});

export default function ZIndexProvider({ children }) {
  const [zIndex, setZIndex] = useState(0);
  const addZIndex = () => {
    setZIndex((prev) => prev + 1);
  };
  return (
    <zIndexContext.Provider value={{ zIndex, addZIndex }}>
      {children}
    </zIndexContext.Provider>
  );
}
