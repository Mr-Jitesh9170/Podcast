import "./card.scss"
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";

export const Card = ({ podcast, handleCard, isAdded }) => {
  return (
    <>
      <div className={`cardContainer ${podcast?.isMedia === "Audio" ? "audio" : "video"}`}>
        <div className="img">
          <img src={podcast?.episodeImgPath ? `http://localhost:8080/${podcast?.episodeImgPath}` : "https://hbr.org/resources/images/article_assets/2019/03/Mar19_19_jason-rosewell-60014-unsplash_3.jpg"} alt="loading" />
        </div>
        <h3>{podcast?.episodeName}</h3>
        <p>{podcast?.episodeDescription}</p>
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
            <span>{podcast?.userId.name ?? "Unknown"}</span> 
          </div>
          <span> • {podcast?.viewCount ?? 0} views</span>
        </div>
      </div >
    </>
  )
} 