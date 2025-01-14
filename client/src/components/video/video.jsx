import "./video.scss"
import { useContext } from "react"
import { MediaPlayerContext } from "../../context/context"
import { mediaURL } from "../../apis/auth"

export const VideoPlayer = ({ media }) => {
    const { setMedia } = useContext(MediaPlayerContext)

    const HandleEpisodeClose = () => {
        setMedia({})
    }
    return (
        <div className="videoContainer">
            <div className="videos">
                <div className="videoDisplay">
                    <video
                        className="responsiveVideo"
                        controls
                        autoPlay
                    >
                        <source src={`${mediaURL}/${media?.episodePath}`} type="video/mp4" />
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