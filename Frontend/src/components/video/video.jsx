import { useParams } from "react-router-dom"
import "./video.scss"
import ben10 from "./ben-10.3gp"


export const Video = ({ episodePlayer, HandleEpisodeClose }) => {
    return (
        <div className="videoContainer">
            <div className="videos">
                <div className="videoDisplay">
                    <video className="responsiveVideo" controls autoPlay>
                        <source src={episodePlayer?.episodePath ? `http://localhost:8080/${episodePlayer?.episodePath}` : ben10} type="video/mp4" />
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

// imgAndVideo-podcast-3489047.MP4