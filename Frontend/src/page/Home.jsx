import { useState, useContext, useEffect } from "react";
import { leftDashBoardTop, DashboardIcons, leftDashBoardBottom } from "../data/data";
import { Outlet, Link } from "react-router-dom";
import "../styles/home.scss";
import Logo from "../Assets/Logo.png"
import { LogIn } from "../page/auth";
import { IsLogginedContext } from "../context/isLogined";
import { Upload } from "./Upload";

export const Home = () => {
  const [click, setClick] = useState(true);
  const { isClosed, setClosed } = useContext(IsLogginedContext);
  const [render, setRender] = useState(null);

  const handleClosed = (i) => {
    isClosed ? setClosed(false) : setClosed(true)
    setRender(i)
  }
  const handleResize = () => {
    click ? setClick(false) : setClick(true)
  }
  return (
    <div className="podcaste-container">
      {
        isClosed && (<div className="para">
          {render === 0 ? <Upload /> : <LogIn />}
        </div>)
      }
      {
        click && <div className="left-container">
          <div className="left-container-top">
            <img src={Logo} alt="" />
            <span>PODCAST</span>
          </div>
          {
            leftDashBoardTop.map(({ name, img, route }, i) => {
              return (
                <>
                  <Link to={route} className="bottom-data" key={i}>
                    <div className="img" >{img}</div>
                    <div className="left-name" >{name}</div>
                  </Link>
                </>
              )
            })
          }
          <hr />
          {
            leftDashBoardBottom.map(({ img, name }, i) => {
              return (
                <>
                  {
                    <Link className="bottom-data" key={i} onClick={() => handleClosed(i)}>
                      <div className="img" >{img}</div>
                      <div className="left-name" >{name}</div>
                    </Link>
                  }
                </>
              )
            })
          }
        </div>
      }
      <div className="right-container" style={click ? null : { width: "100%" }}>
        <div className="right-container-top">
          <div className="threedashIcon" onClick={handleResize} >{DashboardIcons.threeDashIcon}</div>
          <h3>Podcaste</h3>
          <div className="accountIcon" onClick={() => {
            setRender(1)
            handleClosed()
          }}>
            <div className="acc">{DashboardIcons.accountIcon}</div>
            <span >Login</span>
          </div>
        </div>
        <div className="right-container-bottom" >
          <Outlet />
        </div>
      </div>
    </div >
  )
}