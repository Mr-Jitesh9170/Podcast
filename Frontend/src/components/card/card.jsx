import "./card.scss"
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

export const Card = ({ thumbNail, episodeName, episodeDes, name, viewCount }) => {
  return (
    <div className="cardContainer">
      <div className="img">
        <img src={thumbNail ? `http://localhost:8080/${thumbNail}` : "https://hbr.org/resources/images/article_assets/2019/03/Mar19_19_jason-rosewell-60014-unsplash_3.jpg"} alt="" />
      </div>
      <b>{episodeName}</b>
      <p>{episodeDes}</p>
      <div className="card-thumbnail-icon">
        <div className="icon-thumbnail">
          <div className="img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY1NJeBygSdc_ZI5UBc456tYx-UdUavMLlHQ&s" alt="" />
          </div>
          <span>{name ?? "Unknown"}</span>
        </div>
        <span> • {viewCount ?? 0} views</span>
      </div>
      <div className="bottomContainer">
        <span>Add to favorite</span>
        {
          false ? <MdFavoriteBorder size={30} color="blue" /> : <MdFavorite size={30} color="blue" />
        }
      </div>
    </div>

  )
} 