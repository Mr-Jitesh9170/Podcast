import "../Scss-files/DashBoard.scss"
import { DashBoardData, DashBoardChild } from "../AllData/data"
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