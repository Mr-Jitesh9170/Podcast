import "../styles/Favourites.scss"
import { Card } from "../components/card/card"
import { useEffect, useState } from "react"
import { addOrRemoveFavouritePod, favouritePodLists } from "../apis/upload"


const Favourites = ({ Name }) => {
  const [favouritesLists, setFavouritesLists] = useState([]);
  const [favourite, setFavourites] = useState(
    {
      isFavourite: "",
      podcastId: "",
      userId: ""
    }
  )
  const [isAdded, setAdded] = useState(false)

  const handleCard = (podcastId) => {
    setAdded(!isAdded);
    setFavourites({ podcastId, userId: localStorage.getItem("userId"), isFavourite: isAdded })
  }


  useEffect(() => {
    if (favourite.podcastId) {
      addOrRemoveFavouritePod(favourite)
    }
    favouritePodLists(localStorage.getItem("userId"), setFavouritesLists);
  }, [favourite])


  return (
    <div className="favourites-container">
      <h2>Favourites</h2>
      <div className="your-favourites-content">
        {
          favouritesLists?.map(({ podcastId, userId }) => {
            return <Card podcast={podcastId} />
          })
        }
      </div>
    </div>
  )
}

export default Favourites