import "../Scss-files/Favourites.scss"
import { AllFavourites } from "../AllData/data"
export const Favourites = ({ Name }) => {
  return (
    <div className="favourites-container">
      <h2>{Name}</h2>
      <div className="your-favourites-content">
        {
          AllFavourites.map((_) => {
            return <div className="favourites-data">{_.name}</div>
          })
        }
      </div>
    </div>
  )
}