import { Circuler } from "../components/circuler/circuler"
import "../styles/profile.scss"

export const Profile = () => {
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
            </div>
        </div>
    )
}