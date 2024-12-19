import "../styles/DashBoard.scss"
import { categories } from "../data/data.jsx"
import { Card } from "../components/card/card.jsx";


const DashBoard = () => {

  return (
    <div className="Dashboard-container">
      {
        categories.map((category) => {
          return (
            <div className="dashboard-child-container" >
              <div className="child-top">
                <h2>{category}</h2>
                <span >Show All</span>
              </div>
              <div className="child-bottom-content">
                <Card />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default DashBoard