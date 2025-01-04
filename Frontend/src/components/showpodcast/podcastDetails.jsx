import { useParams } from "react-router-dom";
import "./podcastDetails.scss"
import { Circuler } from "../circuler/circuler";
import Badges from "./../../Assets/badge.svg"
import { useContext, useEffect, useState } from "react";
import { podcastViewCount, yourPodcastLists } from "../../apis/upload";
import { userProfileView } from "../../apis/profile";
import { MediaPlayerContext } from "../../context/context";
import { mediaURL } from "../../apis/auth";

const PodcastDetails = () => {
    const { setMedia } = useContext(MediaPlayerContext)
    const { id } = useParams();
    const [profile, setProfile] = useState(
        {
            profileData: {},
            podcastLists: []
        }
    );

    const handleEpisodePlayer = async (podcastId, episodeName, episodeDescription, thumbnail, episodePath, isMedia) => {
        await podcastViewCount({ podcastId, userId: localStorage.getItem("userId") })
        setMedia({ episodeName, episodeDescription, thumbnail, episodePath, isMedia })
    }

    useEffect(() => {
        userProfileView(id, setProfile);
        yourPodcastLists(id, setProfile);
    }, [])

    return (
        <div className="podcastUserDetails">
            <div className="podcaster">
                <Circuler width={"80px"} height={"80px"} img={profile.profileData?.profilePhoto} />
                <div className="userDetails">
                    <div className="name">
                        <h2>{profile.profileData?.name}</h2>
                        <img src={Badges} alt="" width={20} />
                    </div>
                    <p>{profile.profileData?.email}</p>
                </div>
            </div>
            <div className="allEpisods">
                <h3 className="heading" style={{ marginBottom: "10px" }}>All Episodes</h3>
                {
                    profile.podcastLists?.map(({ _id, episodeName, viewCount, episodeDescription, episodeImgPath, episodeVideoPath, isMedia, userId }) => {
                        return (
                            <div className={`episode ${isMedia === "Audio" ? "audio" : "video"}`} onClick={() => handleEpisodePlayer(_id, episodeName, episodeDescription, episodeImgPath, episodeVideoPath, isMedia)}>
                                <div className="episodeThumbnail">
                                    <img src={episodeImgPath ? `${mediaURL}/${episodeImgPath}` : "https://hbr.org/resources/images/article_assets/2019/03/Mar19_19_jason-rosewell-60014-unsplash_3.jpg"} alt="" />
                                </div>
                                <div className="episodeDetails">
                                    <h3 className="episodeName">{episodeName}</h3>
                                    <p className="episodeAbout">{episodeDescription}</p>
                                    <div className="channelDetails">
                                        <div className="logo">
                                            <Circuler width={20} height={20} img={userId?.profilePhoto} />
                                            <span>{userId?.name}</span>
                                        </div>
                                        <div className="views">{viewCount} • views</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PodcastDetails;