import { useEffect, useState, } from "react";
import { Card } from "../components/card/card";
import { Circuler } from "../components/circuler/circuler"
import "../styles/profile.scss"
import { yourPodcastLists } from "../apis/upload";
import { profileUpload, userProfileView } from "../apis/profile";
import { MdEmail } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { alert } from "../utils/alert";

const Profile = () => {
    const [profile, setProfile] = useState(
        {
            profileData: {},
            podcastLists: []
        }
    );

    const profileHandler = async (e) => {
        let { files } = e.target;
        let profileImg = files[0];
        let formData = new FormData();
        formData.append("profilePhoto", profileImg);
        formData.append("userId", localStorage.getItem("userId"));
        let res = await profileUpload(formData)
        window.location.reload();
        toast.success(res.message, alert)
    }

    useEffect(() => {
        userProfileView(localStorage.getItem("userId"), setProfile)
        yourPodcastLists(localStorage.getItem("userId"), setProfile);
    }, [])
    return (
        <div className="your-profile-container">
            <div className="your-profile-top1">
                <div className="profile-name">
                    <Circuler width={"100px"} height={"100px"} img={`http://localhost:8080/${profile.profileData?.profilePhoto}`} />
                    <span>
                        <label for="inputUpload">
                            <FaEdit />
                        </label>
                        <input name="profilePhoto" id="inputUpload" type="file" style={{ display: "none" }} onChange={profileHandler} />
                    </span>
                </div>
                <div className="email-and-name">
                    <h1>{profile.profileData?.name}</h1>
                    <p>
                        <MdEmail size={20} />
                        <p>{profile.profileData?.email}</p>
                    </p>
                </div>
            </div>
            <div className="your-profile-top2">
                <h2>Your Uploads</h2>
                <div className="yourPodcast">
                    {
                        profile?.podcastLists.map((podcast) => {
                            return <Card podcast={podcast} />
                        })
                    }
                </div>
            </div>
            <ToastContainer />

        </div>
    )
}

export default Profile;
