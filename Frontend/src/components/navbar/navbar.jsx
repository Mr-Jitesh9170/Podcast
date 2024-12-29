import { useContext } from "react";
import { navbar } from "../../data/data"
import { IoMdCloudUpload } from "react-icons/io";
import { IoIosLogIn } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { OpenContext, UserContext } from "../../context/context";
import { logout } from "../../apis/auth";
import { useNavigate, Link } from "react-router-dom";
import "./navbar.scss"

export const Navbar = () => {
    const { openAuthTab, openUploadTab } = useContext(OpenContext)
    const { isUser, setUser } = useContext(UserContext);
    const navigation = useNavigate()
    
    const logoutHandler = async () => {
        await logout();
        localStorage.removeItem("userId");
        setUser("");
        navigation("/")
    }
    return (
        <>
            {
                navbar.map(({ name, routes, img }, i) => {
                    if (isUser) {
                        return (
                            <Link to={routes} className="navbar-data">
                                <div className="img" >{img}</div>
                                <div className="left-name" >{name}</div>
                            </Link>
                        )
                    } else {
                        return (
                            <Link to={routes} className="navbar-data" onClick={i !== 1 ? (e) => {
                                e.preventDefault();
                                openAuthTab();
                            } : ""}>
                                <div className="img" >{img}</div>
                                <div className="left-name" >{name}</div>
                            </Link>
                        )
                    }
                })
            }
            <hr />
            <div className="navbar-data" onClick={() => {
                if (isUser) {
                    openUploadTab();
                } else {
                    openAuthTab();
                }
            }} >
                <div className="img" >
                    <IoMdCloudUpload size={27} />
                </div>
                <div className="left-name" >
                    Upload
                </div>
            </div>
            <div className="navbar-data" onClick={isUser ? logoutHandler : openAuthTab} >
                <div className="img" >
                    {isUser ? <IoIosLogOut size={27} /> : <IoIosLogIn size={27} />}
                </div>
                <div className="left-name" >
                    {isUser ? "Log out" : "Log in"}
                </div>
            </div>
        </>
    )
}
