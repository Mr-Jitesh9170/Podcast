import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";

const useLoader = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#2b6fc2");
    const CSSProperties = {
        display: "block",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    };

    const Loader = () => {
        return (
            <ClipLoader
                color={color}
                loading={loading}
                cssOverride={CSSProperties}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        )
    }
    return { Loader, loading, setLoading, setColor }
}

export default useLoader;