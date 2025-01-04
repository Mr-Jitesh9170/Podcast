import React from 'react'
import "./audio.scss"

export const AudioPlayer = ({ media }) => {
    return (
        <div className="audioPlayerContainer">
            <div className="audioDetails">
                <div className="audioImg">
                    <img src={`https://podcast-t43s.onrender.com/${media?.thumbnail}`} alt="" />
                </div>
                <div className="audioName">
                    <span>{media.episodeName}</span>
                    <p>{media.episodeDescription}</p>
                </div>
            </div>
            <div className="audio">
                <audio controls autoPlay >
                    <source src={`https://podcast-t43s.onrender.com/${media?.episodePath}`} type="audio/ogg" />
                    <source src={`https://podcast-t43s.onrender.com/${media?.episodePath}`} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    )
}