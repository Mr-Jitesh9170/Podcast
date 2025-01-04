import "../styles/favourites.scss"
import { Card } from "../components/card/card"
import { useEffect, useState } from "react"
import { favouritePodLists } from "../apis/upload"
import useLoader from "./../hooks/loader"

const Favourites = ({ Name }) => {
  const [favouritesLists, setFavouritesLists] = useState([]);
  const { setLoading, loading, Loader } = useLoader();

  useEffect(() => {
    favouritePodLists(localStorage.getItem("userId"), setFavouritesLists).finally(() => {
      setLoading(false)
    });
  }, [])

  return (
    <div className="favourites-container">
      <h2>Favourites</h2>
      <div className="your-favourites-content">
        {
          loading ?
            <Loader />
            : favouritesLists?.map(({ podcastId }) => {
              return <Card podcast={podcastId} />
            })
        }
      </div>
    </div>
  )
}

export default Favourites