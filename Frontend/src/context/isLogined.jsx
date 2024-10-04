import { createContext, useState } from "react";

export const IsLogginedContext = createContext();

export const IsLoginnedProvider = ({ children }) => {
    const [isClosed, setClosed] = useState(false)
    return (
        <IsLogginedContext.Provider value={{ isClosed, setClosed }}>
            {children}
        </IsLogginedContext.Provider>
    )
} 