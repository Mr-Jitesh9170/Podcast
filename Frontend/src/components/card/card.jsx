import "./card.scss"
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import { Circuler } from "../circuler/circuler";
import { addOrRemoveFavouritePod } from "../../apis/upload";
import { ToastContainer, toast } from "react-toastify";
import { alert } from "../../utils/alert";

export const Card = ({ podcast }) => {

  const handleFavPod = async () => {
    try {
      let res = await addOrRemoveFavouritePod({ podcastId: podcast._id, isFavourite: true })
      toast.success(res.message, alert);
    } catch (error) {
      toast.error(error.response.data.message, alert)
    }
  }

  return (
    <>
      <Link to={`/podcast/podcast-details/${podcast?.userId?._id}`} className={`cardContainer ${podcast?.isMedia === "Audio" ? "audio" : "video"}`}>
        <div className="img">
          <img src={podcast?.episodeImgPath ? `https://podcast-t43s.onrender.com/${podcast?.episodeImgPath}` : "https://hbr.org/resources/images/article_assets/2019/03/Mar19_19_jason-rosewell-60014-unsplash_3.jpg"} alt="loading" />
        </div>
        <h3>{podcast?.episodeName}</h3>
        <p>{podcast?.episodeDescription}</p>
        <Link className="bottomContainer" onClick={handleFavPod}>
          <span>{true ? "Add to favorite" : "Your favourite"}</span>
          {
            true ? <MdFavoriteBorder size={30} color="red" /> : <MdFavorite size={30} color="red" />
          }
        </Link>
        <div className="card-thumbnail-icon">
          <div className="icon-thumbnail">
            <div className="img">
              <Circuler width={20} height={20} img={podcast?.userId?.profilePhoto} />
            </div>
            <span>{podcast?.userId.name ?? "Unknown"}</span>
          </div>
          <span> {podcast?.viewCount ?? 0} • views</span>
        </div>
      </Link >
      <ToastContainer />
    </>
  )
}  