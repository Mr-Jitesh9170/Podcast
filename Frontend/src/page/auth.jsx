import "../styles/auth.scss";
import GoogleIcon from "../assets/google.webp";
import { DashboardIcons } from "../data/data";
import { useState, useContext } from "react";
import { IsLogginedContext } from "../context/isLogined";

export const LogIn = () => {
  const [isLogin, setLogin] = useState(true)
  const { isClosed, setClosed } = useContext(IsLogginedContext);

  // switch sing in/sign up =>
  const isLoggined = () => {
    isLogin ? setLogin(false) : setLogin(true)
  }
  // close page =>
  const handleClosed = () => {
    isClosed ? setClosed(false) : setClosed(true)
  }
  return (
    <>
      {
        isLogin ?
          (
            <div className="logIn-container">
              <div className="log-top1">
                <span>Sign In</span>
                <span onClick={handleClosed} >{DashboardIcons.crossIcon}</span>
              </div>
              <a href="/signin/google" className="log-top2">
                <img src={GoogleIcon} alt="" width={30} />
                <span>Sign in with Google</span>
              </a>
              <div className="log-top3">
                <span></span>
                <div>or</div>
                <span></span>
              </div>
              <div className="log-top4">
                <input type="email" placeholder="enter email" name="email" />
                <input type="password" placeholder="enter password" name="password" />
                <a href="">forgot password ?</a>
              </div>
              <button >Sign In</button>
              <div className="log-top5">
                <span>Don't have an account ?</span>
                <span href="" onClick={isLoggined}>Create Account</span>
              </div>
            </div>
          ) : (
            <div className="logIn-container">
              <div className="log-top1">
                <span>Sign Up</span>
                <span onClick={handleClosed} >{DashboardIcons.crossIcon}</span>
              </div>
              <a href="/signin/google" className="log-top2">
                <img src={GoogleIcon} alt="" width={30} />
                <span>Sign in with Google</span>
              </a>
              <div className="log-top3">
                <span></span>
                <div>or</div>
                <span></span>
              </div>
              <div className="log-top4">
                <input type="email" placeholder="Full name" name="Full name" />
                <input type="email" placeholder="Email" name="Email" />
                <input type="password" placeholder="Password" name="Password" />
              </div>
              <button >Sign In</button>
              <div className="log-top5">
                <span>Already have an account ?</span>
                <span onClick={isLoggined}>Sign in</span>
              </div>
            </div>
          )
      }
    </>
  )
}