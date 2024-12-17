import { useParams } from "react-router-dom"
import "./video.scss"
import ben10 from "./ben-10.3gp"


export const Video = () => {
    const { video } = useParams();
    return (
        <div className="videoContainer">
            <div className="videos">
                <div className="videoDisplay">
                    <video className="responsiveVideo" controls>
                        <source src={ben10} type="video/mp4" />
                    </video>
                </div>
                <div className="episodeDescriptions">
                    ✖️
                </div>
            </div>
        </div>
    )
}