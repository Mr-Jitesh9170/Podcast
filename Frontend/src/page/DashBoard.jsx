import "../styles/DashBoard.scss"
import { useState } from "react";
import { DashBoardData } from "../data/data"
import { Card } from "../components/card/card.jsx";


export const DashBoard = () => {
  const [full, setFull] = useState(true)

  return (
    <div className="Dashboard-container">
      {
        DashBoardData.map(({ name, data }) => {
          return (
            <div className="dashboard-child-container" style={{ height: full ? "100%" : null }}>
              <div className="child-top">
                <h3>{name}</h3>
                <span onClick={() => {
                  full ? setFull(false) : setFull(true)
                }}>Show All</span>
              </div>
              <div className="child-bottom-content">
                {
                  data.map((_) => {
                    return <Card />
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
} 