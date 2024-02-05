import { useEffect, useState } from "react";
import { leftDashBoardTop, DashboardIcons } from "../AllData/data";
import { Outlet, Link } from "react-router-dom";
import "./home.scss";
import Logo from "../Home/Logo.png"
import { Upload } from "../page/Upload";
import { LogIn } from "../page/LogIn";
import { SignUp } from "../Component/signUp";
let UploadIcon = <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BackupRoundedIcon"><path d="M19 11c0-3.87-3.13-7-7-7-3.22 0-5.93 2.18-6.74 5.15C2.82 9.71 1 11.89 1 14.5 1 17.54 3.46 20 6.5 20h12c2.49-.01 4.5-2.03 4.5-4.52 0-2.33-1.75-4.22-4-4.48zm-6 2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H9.21c-.45 0-.67-.54-.35-.85l2.79-2.79c.2-.2.51-.2.71 0l2.79 2.79c.31.31.09.85-.35.85H13z"></path></svg>
let LoginIcon = <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ExitToAppRoundedIcon"><path d="M10.79 16.29c.39.39 1.02.39 1.41 0l3.59-3.59c.39-.39.39-1.02 0-1.41L12.2 7.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L12.67 11H4c-.55 0-1 .45-1 1s.45 1 1 1h8.67l-1.88 1.88c-.39.39-.38 1.03 0 1.41zM19 3H5c-1.11 0-2 .9-2 2v3c0 .55.45 1 1 1s1-.45 1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v3c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg>
let LightModeIcon = <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeRoundedIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>



export const Home = () => {
  const [click, setClick] = useState(true);
  const [isOpen, setIsOpen] = useState({ isTrue: "", isSign: true, compo: "", userName: "" });


  let leftDashBoardBottom = [
    {
      name: "Upload",
      img: UploadIcon,
      compo: <Upload setIsOpen={setIsOpen} />
    },
    {
      name: "Light Mode",
      img: LightModeIcon,
    },
    {
      name: "Log In",
      img: LoginIcon,
      compo: isOpen.isSign ? <LogIn setIsOpen={setIsOpen} /> : < SignUp setIsOpen={setIsOpen} />
    },
  ]
  // render Output 
  const handleOpen = (compo, i) => {
    i === 1 ? setIsOpen({ isTrue: false, compo: compo }) : setIsOpen({ isTrue: true, compo: compo })
  }

  // Open and Close Menu  =>
  const resize = () => {
    click ? setClick(false) : setClick(true);
  }

  return (
    <div className="podcaste-container">
      <div className="para" style={isOpen.isTrue ? { display: "block" } : { display: "none" }}>
        {isOpen.compo}
      </div>
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
            leftDashBoardBottom.map(({ img, name, compo }, i) => {
              return (
                <Link className="bottom-data underline" onClick={() => handleOpen(compo, i)} key={i}>
                  <div className="img">{img}</div>
                  <div className="left-name" >{name}</div>
                </Link >
              )
            })
          }
        </div>
      }
      <div className="right-container" style={click ? null : { width: "100%" }}>
        <div className="right-container-top">
          <div className="threedashIcon" onClick={resize}>{DashboardIcons.threeDashIcon}</div>
          <h3>hey , {isOpen.userName}!</h3>
          <div className="accountIcon">
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