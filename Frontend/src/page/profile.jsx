import { useEffect, useState } from "react";
import { Card } from "../components/card/card";
import { Circuler } from "../components/circuler/circuler"
import "../styles/profile.scss"
import { yourPodcastLists } from "../apis/upload";

const Profile = () => {
    const [yourPodcLists, setPodcLists] = useState([]);

    console.log(yourPodcLists)

    useEffect(() => {
        yourPodcastLists(localStorage.getItem("userId"), setPodcLists);
    }, [])
    return (
        <div className="your-profile-container">
            <div className="your-profile-top1">
                <div className="profile-name">
                    <Circuler width={"100px"} height={"100px"} />
                </div>
                <div className="email-and-name">
                    <h1>User</h1>
                    <p>
                        Email:  <a href="76"> mr.user@gmail.com</a>
                    </p>
                </div>
            </div>
            <div className="your-profile-top2">
                <h2>Your Uploads</h2>
                <div className="yourPodcast">
                    {
                        yourPodcLists.map((podcast) => {
                            return <Card thumbNail={podcast.episodeImgPath} name={podcast.userId.name} episodeName={podcast?.episodeName} episodeDes={podcast?.episodeDescription} />
                        })
                    }
                </div>
            </div>
            <div className="your-favourites-top2">
                <h2>Your Favourites</h2>
                <div className="yourPodcast">
                    {
                        yourPodcLists.map((podcast) => {
                            return <Card thumbNail={podcast.episodeImgPath} name={podcast.userId.name} episodeName={podcast?.episodeName} episodeDes={podcast?.episodeDescription} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile;
