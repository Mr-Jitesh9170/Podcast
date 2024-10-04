import "../styles/auth.scss";
import GoogleIcon from "../assets/google.webp";
import { DashboardIcons } from "../data/data";
import { useState, useContext } from "react";
import { IsLogginedContext } from "../context/isLogined";
import { auth } from "../apis/auth";
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { alert } from "../utils/alert";

export const LogIn = () => {
  const navigation = useNavigate();
  const [isLogin, setLogin] = useState(true)
  const { isClosed, setClosed } = useContext(IsLogginedContext);
  const [input, setInput] = useState(
    {
      name: "",
      email: "",
      password: ""
    }
  )

  // handle submit =>
  const handleSubmit = async (e) => {
    let { name } = e.target;
    if (name === "sign-up") {
      if (input.name.trim() === "" || input.email.trim() === "" || input.password.trim() === "") {
        toast.warning("Input filled missing!", alert)
        return;
      }
      let data = await auth("/podcast/user/sign-up", input);
      toast.success(data.message, alert)
      setLogin(true)
    }
    else if (name === "sign-in") {
      if (input.email.trim() === "" || input.password.trim() === "") {
        toast.warning("Input filled missing!", alert)
        return;
      }
      let data = await auth("/podcast/user/sign-in", { email: input.email, password: input.password });
      toast.success(data.message, alert)
      localStorage.setItem("token", data.token)
      navigation("/podcast/search")
    }
  }

  // handle input =>
  const handleInput = (e) => {
    let { value, name } = e.target;
    setInput({ ...input, [name]: value })
  }
  
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
                <input type="email" placeholder="enter email" name="email" value={input.email} onChange={handleInput} />
                <input type="password" placeholder="enter password" name="password" value={input.password} onChange={handleInput} />
                <a href="">forgot password ?</a>
              </div>
              <button name="sign-in" onClick={handleSubmit}>Sign In</button>
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
                <input type="text" placeholder="Full name" name="name" value={input.name} onChange={handleInput} />
                <input type="email" placeholder="Email" name="email" value={input.email} onChange={handleInput} />
                <input type="password" placeholder="Password" name="password" value={input.password} onChange={handleInput} />
              </div>
              <button onClick={handleSubmit} name="sign-up">Sign up</button>
              <div className="log-top5">
                <span>Already have an account ?</span>
                <span onClick={isLoggined}>Sign in</span>
              </div>
            </div>
          )
      }
      <ToastContainer />
    </>
  )
}