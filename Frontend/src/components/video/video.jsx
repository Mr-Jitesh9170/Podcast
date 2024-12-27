import "./video.scss"
import ben10 from "./ben-10.3gp"
import { useContext } from "react"
import { MediaPlayerContext } from "../../context/context"


export const VideoPlayer = ({ media }) => {
    const { setMedia } = useContext(MediaPlayerContext)
    const HandleEpisodeClose = () => {
        setMedia({})
    }
    return (
        <div className="videoContainer">
            <div className="videos">
                <div className="videoDisplay">
                    <video className="responsiveVideo" controls autoPlay>
                        <source src={media?.episodePath ? `http://localhost:8080/${media?.episodePath}` : ben10} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="close" onClick={HandleEpisodeClose}>
                    ✖️
                </div>
            </div>
        </div>
    )
}