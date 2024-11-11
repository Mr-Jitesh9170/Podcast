import "../styles/DashBoard.scss"
import { DashBoardData } from "../data/data"
import { DashBoardChild } from "../components/dashboardChild";

export const DashBoard = () => {
  return (
    <div className="Dashboard-container">
      {
        DashBoardData.map((_) => {
          return <DashBoardChild Name={_.name} Data={_.data} />
        })
      }
    </div>
  )
} 