import "../styles/Favourites.scss"
import { AllFavourites } from "../data/data"
import { Card } from "../components/card"
export const Favourites = ({ Name }) => {
  return (
    <div className="favourites-container">
      <h2>{Name}</h2>
      <div className="your-favourites-content">
        {
          AllFavourites.map((_) => {
            return <Card />
          })
        }
      </div>
    </div>
  )
}