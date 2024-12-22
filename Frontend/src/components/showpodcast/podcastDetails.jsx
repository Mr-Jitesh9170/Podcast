import { useParams } from "react-router-dom";
import "./podcastDetails.scss"
import { Circuler } from "../circuler/circuler";
import Badges from "./../../Assets/badge.svg"
import { useEffect, useState } from "react";
import { yourPodcastLists } from "../../apis/upload";
import { userProfileView } from "../../apis/profile";

const PodcastDetails = () => {
    const { id } = useParams();
    const [profile, setProfile] = useState(
        {
            profileData: {},
            podcastLists: []
        }
    );
    useEffect(() => {
        userProfileView(id, setProfile)
        yourPodcastLists(id, setProfile)
    }, [])

    return (
        <div className="podcastUserDetails">
            <div className="podcaster">
                <Circuler width={"80px"} height={"80px"} img={`http://localhost:8080/${profile.profileData.profilePhoto}`} />
                <div className="userDetails">
                    <div className="name">
                        <h2>{profile.profileData.name}</h2>
                        <img src={Badges} alt="" width={20} />
                    </div>
                    <p>{profile.profileData.email}</p>
                </div>
            </div>
            <hr />
            <div className="allEpisods">
                {
                    profile.podcastLists?.map(({ episodeName, episodeDescription, episodeImgPath, episodeVideoPath, isMedia, userId }) => {
                        return (
                            <div className="episode">
                                <div className="episodeThumbnail">
                                    <img src={episodeImgPath ? `http://localhost:8080/${episodeImgPath}` : "https://hbr.org/resources/images/article_assets/2019/03/Mar19_19_jason-rosewell-60014-unsplash_3.jpg"} alt="" />
                                </div>
                                <div className="episodeDetails">
                                    <h2 className="episodeName">{episodeName}</h2>
                                    <b className="episodeAbout">{episodeDescription}fdfdf fdfd fdfdf fdf fdf fdf </b>
                                    <div className="channelDetails">
                                        <div className="logo">
                                            <Circuler width={20} height={20} img={`http://localhost:8080/${userId.profilePhoto}`} />
                                            <span>{userId?.name}</span>
                                        </div>
                                        <div className="views">0 • views</div>
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