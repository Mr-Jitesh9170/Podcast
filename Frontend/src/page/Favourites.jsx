import "../Scss-files/Favourites.scss"
import { AllFavourites } from "../AllData/data"
import { Card } from "../Component/card"
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