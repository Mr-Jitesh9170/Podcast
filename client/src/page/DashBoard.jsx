import { useState } from "react";
import { Outlet } from "react-router-dom";
import "../styles/dashboard.scss";
import Logo from "../Assets/Logo.png"
import { IoReorderThreeSharp } from "react-icons/io5";
import { ProfileIcon } from "../components/profileIcon/profileIcon";
import { Navbar } from "../components/navbar/navbar";

const Dashboard = () => {
  const [isLeftDashboard, setLeftDashboard] = useState(true);
  const handleResize = () => {
    setLeftDashboard(!isLeftDashboard);
  }

  return (
    <>
      <div className="podcaste-container">
        <div className="left-container" style={isLeftDashboard ? { display: "block" } : { display: "none" }}>
          <div className="left-container-top">
            <div className="img">
              <img src={Logo} alt="" />
            </div>
            <span>PODCAST</span>
          </div>
          <Navbar />
        </div >
        <div className="right-container" style={isLeftDashboard ? null : { width: "100%" }}>
          <div className="right-container-top">
            <div className="threedashIcon" onClick={handleResize} >
              <IoReorderThreeSharp size={27} color="#fff" />
            </div>
            <ProfileIcon />
          </div>
          <div className="right-container-bottom" >
            <Outlet />
          </div>
        </div>
      </div >
    </>
  )
}

export default Dashboard