import { useState, useContext } from "react";
import { DashboardIcons, leftDashBoard } from "../data/data";
import { Outlet, Link } from "react-router-dom";
import "../styles/home.scss";
import Logo from "../Assets/Logo.png"
import { IsLogginedContext, isUserContext } from "../context/isLogined";
import { Circuler } from "../components/circuler/circuler";
import { LogIn } from "./auth";

const Home = () => {
  const [isLeftDashboard, setLeftDashboard] = useState(true);
  const { isClosed, setClosed } = useContext(IsLogginedContext);
  const { isUser } = useContext(isUserContext);
  const [tabName, setTabName] = useState(null);

  const handleResize = () => {
    isLeftDashboard ? setLeftDashboard(false) : setLeftDashboard(true)
  }
  return (
    <div className="podcaste-container">
      {
        isLeftDashboard &&
        (
          <div className="left-container">
            <div className="left-container-top">
              <img src={Logo} alt="" />
              <span>PODCAST</span>
            </div>
            {
              leftDashBoard.map(({ name, img, route }, i) => {
                return (
                  <>
                    {i === 3 && <hr />}
                    <Link to={route} className="bottom-data" key={i} onClick={() => {
                      setTabName(name)
                      i > 2 ? setClosed(route) : setClosed("")
                    }} >
                      <div className="img" >{img}</div>
                      <div className="left-name" >{name}</div>
                    </Link>
                  </>
                )
              })
            }
          </div>
        )
      }
      <div className="right-container" style={isLeftDashboard ? null : { width: "100%" }}>
        <div className="right-container-top">
          <div className="threedashIcon" onClick={handleResize} >{DashboardIcons.threeDashIcon}</div>
          <h1>&lt; {tabName ?? "Welcome!"} /&gt;</h1>
          {
            isUser ?
              (
                <Link to={"/podcast/profile"} style={{ textDecoration: "none" }}>
                  <Circuler />
                </Link>
              ) :
              (
                <div className="accountIcon" onClick={() => {
                  setClosed(<LogIn />)
                }}>
                  <div className="acc">{DashboardIcons.accountIcon}</div>
                  <span >Login</span>
                </div>
              )
          }
        </div>
        <div className="right-container-bottom" >
          <Outlet />
          {
            isClosed && (
              <div className="para">
                {
                  isClosed
                }
              </div>
            )
          }
        </div>
      </div>
    </div >
  )
}


export default Home
