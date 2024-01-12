import { useState } from "react";
import { leftDashBoard, DashboardIcons } from "../AllData/data";

import "./home.scss";

// All components imported here ------>
import { DashBoard } from "../AllComponents/DashBoard";
import { Search } from "../AllComponents/Search";
import { Favourites } from "../AllComponents/Favourites";
import { Upload } from "../AllComponents/Upload";
import { YourProfile } from "../AllComponents/YourProfile";
import { Logout } from "../AllComponents/LogIn";


const style2 = {
  transition: "all 0.3s"
}

export const Home = () => {
  const [click, setClick] = useState(true);
  const [show, setShow] = useState(4)
  const TopComponents = [<DashBoard />, <Search />, <Favourites Name={"Favourites"} />]
  const BottomComponents = [<Upload />, <YourProfile />, <Logout />]
  return (
    <div className="podcaste-container">
      {/* <div className="child-container"  >
        {
          BottomComponents.filter((_, i) => {
            return (show - 3 && show != 0) === i ? BottomComponents[i] : null
          })
        }
      </div> */}
      {
        click &&
        <div className="left-container">
          {
            leftDashBoard.map((_, i) => {
              if (i === 0) {
                return (
                  <div key={i} className="left-bottom-data" style={{gap:"6px"}}>
                    <img width={34} src={_.img} alt="" />
                    <div style={{fontSize:"27px",fontWeight:"700",color:"#CC83FF"}}>{_.name}</div>
                  </div>
                )
              }
              else {
                return (
                  <>
                    <div key={i} className="left-bottom-data box2" onClick={() => {
                      setShow(i - 1)
                    }}>
                      <div className="img">{_.img}</div>
                      <div className="left-name">{_.name}</div>
                    </div>
                    {
                      i == 3 && <div style={{ width: "100%", height: "1px", background: "white" }}></div>
                    }
                  </>
                )
              }
            })
          }
        </div>
      }
      <div className="right-container" style={click ? style2 : { width: "100%" }}>
        <div className="right-container-top">
          <div className="threedashIcon" onClick={() => {
            click ? setClick(false) : setClick(true)
          }}>{DashboardIcons.threeDashIcon}</div>
          <div className="accountIcon" onClick={() => {
            setClick(true)
          }}>
            <div className="acc">{DashboardIcons.accountIcon}</div>
            <span >Login</span>
          </div>
        </div>
        <div className="right-container-bottom" >
          {
            TopComponents[show >= 3 ? show - 3 : show]
          }
        </div>
      </div>
    </div >
  )
}