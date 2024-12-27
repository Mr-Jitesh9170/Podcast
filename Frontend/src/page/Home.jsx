import { useState, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/home.scss";
import Logo from "../Assets/Logo.png"
import { isUserContext } from "../context/context";
import { Circuler } from "../components/circuler/circuler";
import Upload from "../page/upload"
import { MdHome } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { MdOutlineFavorite } from "react-icons/md";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { IoReorderThreeSharp } from "react-icons/io5";
import { MdCloudUpload } from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";
import { Auth } from "./auth";
import { IoIosLogOut } from "react-icons/io";


const Home = () => {
  const [isLeftDashboard, setLeftDashboard] = useState(true);
  const { isUser } = useContext(isUserContext);
  const [isOpen, setOpen] = useState(
    {
      isUploadOpen: false, 
      isAuthOpen: false,
    }
  )

  const handleUploadShow = () => {
    setOpen({ ...isOpen, isUploadOpen: true })
  }
  const handleAuthShow = () => {
    setOpen({ ...isOpen, isAuthOpen: true })
  }

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
            <Link to="/" className="bottom-data">
              <div className="img" >
                <MdHome size={27} />
              </div>
              <div className="left-name" >Home</div>
            </Link>
            <Link to="/podcast/search" className="bottom-data">
              <div className="img" >
                <IoSearch size={27} />
              </div>
              <div className="left-name" >Search</div>
            </Link>
            <Link to="/podcast/favourites" className="bottom-data">
              <div className="img" >
                <MdOutlineFavorite size={27} />
              </div>
              <div className="left-name" >Favourites</div>
            </Link>
            <hr /> 
            <div className="bottom-data" onClick={handleUploadShow} >
              <div className="img" >
                <MdCloudUpload size={27} />
              </div>
              <div className="left-name" >
                Uploads
              </div>
            </div>
            {
              isUser ? (
                <div className="bottom-data" onClick={handleAuthShow}>
                  <div className="img" >
                    <IoIosLogOut size={27} />
                  </div>
                  <div className="left-name" >
                    Logout
                  </div>
                </div>) : (
                <div className="bottom-data" onClick={handleAuthShow}>
                  <div className="img" >
                    <IoIosLogIn size={27} />
                  </div>
                  <div className="left-name" >
                    Login
                  </div>
                </div>
              )
            }
          </div >
        )
      }
      <div className="right-container" style={isLeftDashboard ? null : { width: "100%" }}>
        <div className="right-container-top">
          <div className="threedashIcon" onClick={handleResize} >
            <IoReorderThreeSharp size={27} color="#fff" />
          </div>
          {
            isUser ?
              (
                <Link to={"/podcast/profile"} style={{ textDecoration: "none" }}>
                  <Circuler />
                </Link>
              ) :
              (
                <div className="accountIcon">
                  <RiAccountPinCircleFill color="#cc83ff" size={27} />
                  <span >Login</span>
                </div>
              )
          }
        </div>
        <div className="right-container-bottom" >
          <Outlet />
        </div>
      </div>
      {
        isOpen.isUploadOpen && (
          <div className="layer" >
            <Upload setOpen={setOpen} />
          </div>
        )
      }
      {
        isOpen.isAuthOpen && (
          <div className="layer" >
            <Auth setOpen={setOpen} />
          </div>
        )
      }
    </div >
  )
}

export default Home