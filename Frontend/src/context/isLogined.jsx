import { createContext, useState } from "react";

// closing the tabs =>
export const IsLogginedContext = createContext();
export const IsLoginnedProvider = ({ children }) => {
    const [isClosed, setClosed] = useState("")
    return (
        <IsLogginedContext.Provider value={{ isClosed, setClosed }}>
            {children}
        </IsLogginedContext.Provider>
    )
} 

// is user loggined =>
export const isUserContext = createContext();
export const IsUserProvider = ({ children }) => {
    const [isUser, setUser] = useState(localStorage.getItem("userId"))
    return (
        <isUserContext.Provider value={{ isUser, setUser }}>
            {children}
        </isUserContext.Provider>
    )
}  