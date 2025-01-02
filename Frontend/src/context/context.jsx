import { createContext, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

// is user loggined =>
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [isUser, setUser] = useState(localStorage.getItem("userId"))
    return (
        <UserContext.Provider value={{ isUser, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

// open =>
export const OpenContext = createContext();
export const OpenProvider = ({ children }) => {
    const [open, setOpen] = useState({
        isAuthOpen: false,
        isUploadOpen: false
    })

    const openAuthTab = () => {
        setOpen({ isAuthOpen: true })
    }
    const openUploadTab = () => {
        setOpen({ isUploadOpen: true })
    }

    const closeAuthTab = () => {
        setOpen((prev) => ({ ...open, isAuthOpen: false }))
    }
    const closeUploadTab = () => {
        setOpen((prev) => ({ ...open, isUploadOpen: false }))
    }
    return (
        <OpenContext.Provider value={{ open, setOpen, closeUploadTab, openUploadTab, closeAuthTab, openAuthTab }} >
            {children}
        </OpenContext.Provider >
    )
}

// media player =>
export const MediaPlayerContext = createContext();
export const MediaProvider = ({ children }) => {
    const [media, setMedia] = useState({})
    return (
        <MediaPlayerContext.Provider value={{ media, setMedia }}>
            {children}
        </MediaPlayerContext.Provider>
    )
}

// loader =>
const LoaderContext = createContext();
export const LoaderProvider = ({ children }) => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    const CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    const Loader = () => {
        return (
            <ClipLoader
                color={color}
                loading={loading}
                cssOverride={CSSProperties}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        )
    }
    return (
        <LoaderContext.Provider value={{ Loader, setLoading, setColor }}>
            {children}
        </LoaderContext.Provider>
    )
}