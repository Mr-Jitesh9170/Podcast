import { Card } from "./card";
import { useState } from "react";
// used components
export const DashBoardChild = ({ Name, Data }) => {
  const [full, setFull] = useState(true)
  return (
    <div className="dashboard-child-container" style={{ height: full ? "100%" : null }}>

      <div className="child-top">
        <h3>{Name}</h3>
        <span onClick={() => {
          full ? setFull(false) : setFull(true)
        }}>Show All</span>
      </div>

      <div className="child-bottom-content">
        {
          Data.map((_) => {
            return <Card />
          })
        }
      </div>
    </div>
  )
}
