import React from 'react'
import "./audio.scss"
import { mediaURL } from '../../apis/auth'

export const AudioPlayer = ({ media }) => {
    return (
        <div className="audioPlayerContainer">
            <div className="audioDetails">
                <div className="audioImg">
                    <img src={`${mediaURL}/${media?.thumbnail}`} alt="" />
                </div>
                <div className="audioName">
                    <span>{media.episodeName}</span>
                    <p>{media.episodeDescription}</p>
                </div>
            </div>
            <div className="audio">
                <audio controls autoPlay >
                    <source src={`${mediaURL}/${media?.episodePath}`} type="audio/ogg" />
                    <source src={`${mediaURL}/${media?.episodePath}`} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    )
}