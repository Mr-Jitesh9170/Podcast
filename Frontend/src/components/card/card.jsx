import "./card.scss"
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
 


export const Card = ({ isMedia, thumbNail, episodeName, episodeDes, name, viewCount, handleCard, isAdded }) => {
  return (
    <div className={`cardContainer ${isMedia === "Audio" ? "audio" : "video"}`}>
      <div className="img">
        <img src={thumbNail ? `http://localhost:8080/${thumbNail}` : "https://hbr.org/resources/images/article_assets/2019/03/Mar19_19_jason-rosewell-60014-unsplash_3.jpg"} alt="loading" />
      </div>
      <h3>{episodeName}</h3>
      <p>{episodeDes}</p>

      <div className="bottomContainer" onClick={handleCard}>
        <span>{isAdded ? "Add to favorite" : "Your favourite"}</span>
        {
          isAdded ? <MdFavoriteBorder size={30} color="red" /> : <MdFavorite size={30} color="red" />
        }
      </div>
      <div className="card-thumbnail-icon">
        <div className="icon-thumbnail">
          <div className="img">
            <RiAccountCircleFill size={20} />
          </div>
          <span>{name ?? "Unknown"}</span>
        </div>
        <span> • {viewCount ?? 0} views</span>
      </div>
    </div >
  )
} 