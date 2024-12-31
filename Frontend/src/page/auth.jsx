import "../styles/auth.scss";
import GoogleIcon from "../Assets/google.webp";
import { useContext, useState } from "react";
import { auth } from "../apis/auth";
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { alert } from "../utils/alert";
import { RxCross2 } from "react-icons/rx";
import { OpenContext, UserContext } from "../context/context";
import { Button } from "./../components/button/button"
const Auth = () => {
  const navigation = useNavigate();
  const { setUser } = useContext(UserContext);
  const { closeAuthTab } = useContext(OpenContext)
  const [isLogin, setLogin] = useState(true)
  const [input, setInput] = useState(
    {
      name: "",
      email: "",
      password: ""
    }
  )
  const handleSignUp = async () => {
    for (const key in input) {
      if (!input[key].trim()) {
        return toast.warning(`${key} missing!`, alert)
      }
    }
    try {
      let response = await auth("/podcast/user/sign-up", input);
      toast.success(response.message, alert)
      setLogin(true)
    } catch (error) {
      toast.error(error.response.data.message, alert)
    }
  }
  const handleSignIn = async () => {
    if (input.email.trim() === "" || input.password.trim() === "") {
      toast.warning("Input filled missing!", alert)
      return;
    }
    try {
      let data = await auth("/podcast/user/sign-in", { email: input.email, password: input.password });
      toast.success(data.message, alert)
      localStorage.setItem("userId", data?.userId)
      setUser(data?.userId)
      closeAuthTab();
      navigation("/podcast/home")
      toast.success(data.message, alert)
    } catch (error) {
      toast.error(error.response.data.message, alert)
    }
  }

   const handleInput = (e) => {
    let { value, name } = e.target;
    setInput({ ...input, [name]: value })
  }

   const isLoggined = () => {
    setLogin(!isLogin)
  } 
  return (
    <div className="authConainer">
      {
        isLogin ?
          (
            <div className="logIn-container">
              <div className="log-top1">
                <span>Sign In</span>
                <span onClick={closeAuthTab} >
                  <RxCross2 size={27} />
                </span>
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
                <a href="##">forgot password ?</a>
              </div>
              <Button name={"Sign In"} btnName={"sign-in"} btnClick={handleSignIn} />
              <div className="log-top5">
                <span>Don't have an account ?</span>
                <span href="" onClick={isLoggined}>Create Account</span>
              </div>
            </div>
          ) : (
            <div className="logIn-container">
              <div className="log-top1">
                <span>Sign Up</span>
                <span onClick={closeAuthTab} >
                  <RxCross2 size={27} />
                </span>
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
              <Button name={"Sign up"} btnName={"sign-up"} btnClick={handleSignUp} />
              <div className="log-top5">
                <span>Already have an account ?</span>
                <span onClick={isLoggined}>Sign in</span>
              </div>
            </div>
          )
      }
      <ToastContainer />
    </div>
  )
}

export default Auth;