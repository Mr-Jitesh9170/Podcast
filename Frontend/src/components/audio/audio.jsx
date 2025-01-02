import React from 'react'
import "./audio.scss"
import bigDawg from "./Big Dawgs - (Raag.Fm).mp3"

export const AudioPlayer = ({ media }) => {

    return (
        <div className="audioPlayerContainer">
            <div className="audioDetails">
                <div className="audioImg">
                    <img src={media?.thumbnail ? `https://podcast-t43s.onrender.com/${media?.thumbnail}` : "https://cdn.dxomark.com/wp-content/uploads/medias/post-32965/shutterstock_1427568797-1-2-1024x768.jpg"} alt="" />
                </div>
                <div className="audioName">
                    <span>{media.episodeName}</span>
                    <p>{media.episodeDescription}</p>
                </div>
            </div>
            <div className="audio">
                <audio controls autoPlay >
                    <source src={media?.episodePath ? `https://podcast-t43s.onrender.com/${media?.episodePath}` : bigDawg} type="audio/ogg" />
                    <source src="horse.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    )
}
