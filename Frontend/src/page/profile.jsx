import { useEffect, useState, } from "react";
import { Card } from "../components/card/card";
import { Circuler } from "../components/circuler/circuler"
import "../styles/profile.scss"
import { yourPodcastLists } from "../apis/upload";
import { userProfileView } from "../apis/profile";

const Profile = () => {
    const [profile, setProfile] = useState(
        {
            profileData: {},
            podcastLists: []
        }
    );

    useEffect(() => {
        userProfileView(localStorage.getItem("userId"), setProfile)
        yourPodcastLists(localStorage.getItem("userId"), setProfile);
    }, [])
    return (
        <div className="your-profile-container">
            <div className="your-profile-top1">
                <div className="profile-name">
                    <Circuler width={"100px"} height={"100px"} />
                </div>
                <div className="email-and-name">
                    <h1>{profile.profileData?.name}</h1>
                    <p>
                        Email :  <a href="76"> {profile.profileData?.email}</a>
                    </p>
                </div>
            </div>
            <div className="your-profile-top2">
                <h2>Your Uploads</h2>
                <div className="yourPodcast">
                    {
                        profile?.podcastLists.map((podcast) => {
                            return <Card thumbNail={podcast.episodeImgPath} name={podcast.userId.name} episodeName={podcast?.episodeName} episodeDes={podcast?.episodeDescription} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile;
