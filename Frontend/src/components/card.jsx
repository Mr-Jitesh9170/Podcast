import "./card.scss"
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

export const Card = () => {
  return (
    <div className="cardContainer">
      <div className="img">
        <img src="https://hbr.org/resources/images/article_assets/2019/03/Mar19_19_jason-rosewell-60014-unsplash_3.jpg" alt="" />
      </div>
      <b>This American Life</b>
      <p>This american Life is a Podcast that expolores diffrent expects of life and adventures</p>
      <div className="card-thumbnail-icon">
        <div className="icon-thumbnail">
          <div className="img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY1NJeBygSdc_ZI5UBc456tYx-UdUavMLlHQ&s" alt="" />
          </div>
          <span>upasana</span>
        </div>
        <ul>
          <li>55 views</li>
        </ul>
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