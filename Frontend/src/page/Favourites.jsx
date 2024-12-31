import "../styles/favourites.scss"
import { Card } from "../components/card/card"
import { useEffect, useState } from "react"
import { favouritePodLists } from "../apis/upload"


const Favourites = ({ Name }) => {
  const [favouritesLists, setFavouritesLists] = useState([]);
  useEffect(() => {
    favouritePodLists(localStorage.getItem("userId"), setFavouritesLists);
  }, [])

  return (
    <div className="favourites-container">
      <h2>Favourites</h2>
      <div className="your-favourites-content">
        {
          favouritesLists?.map(({ podcastId }) => {
            return <Card podcast={podcastId} />
          })
        }
      </div>
    </div>
  )
}

export default Favourites