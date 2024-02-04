import "../Scss-files/YourProfile.scss"
import { Favourites } from "./Favourites"
export const YourProfile = () => {
  return (
    <div className="your-profile-container">
      <div className="your-profile-top1">
        <div className="profile-name">J</div>
        <div className="email-and-name">
          <h1>Jitesh Pandey</h1>
          <p>Email: <a href="">mr.jiteshpandey9170@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="your-profile-top2">
        <h2>Your Uploads</h2>
        <a href="">Upload</a>
      </div>
      <div className="your-profile-top3">
        <Favourites Name={"Your Favourites"}/>
      </div>
    </div>
  )
}