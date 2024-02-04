import "../Scss-files/Login.scss";
import { useState } from "react";
import GoogleIcon from "../Assets/google.webp";
import { DashboardIcons } from "../AllData/data";
export const LogIn = ({ setIsOpen }) => {

  const [signInData, setSignInData] = useState({
    email: "",
    password: ""
  })

  // API call =>
  const userSignIn = async (data) => {
    try {
      let respone = await data;
      console.log(respone)
    } catch (error) {
      console.log(error);
    }
  }

  // Input data =>
  const handleChange = (e) => {
    let { name, value } = e.target;
    setSignInData((prevState) =>
    (
      {
        ...prevState,
        [name]: value
      }
    )
    )
  }

  //  handleSubmit =>
  const handleSubmit = (e) => {
    e.preventDefault();
    let { email, password } = signInData;
    if (email === "" || password === "")
      alert("Please enter all fileds")
    else
      userSignIn({ email, password });
  }

  return (
    <div className="logIn-container">
      <div className="log-top1">
        <span>Sign In</span>
        <span onClick={() => setIsOpen((prevState) => ({ ...prevState, isTrue: false }))}>{DashboardIcons.crossIcon}</span>
      </div>
      <a href="/signin/google" className="log-top2">
        <img src={GoogleIcon} alt="" width={30} />
        <span>Sign in with Google</span>
      </a>
      <div className="log-top3">
        <span></span>
        <div>or</div>
        <span> </span>
      </div>
      <div className="log-top4">
        <input type="email" placeholder="enter email" name="email" value={signInData.email} onChange={handleChange} />
        <input type="password" placeholder="enter password" name="password" value={signInData.password} onChange={handleChange} />
        <a href="">forgot password ?</a>
      </div>
      <button onClick={handleSubmit}>Sign In</button>
      <div className="log-top5">
        <span>don't have an account ?</span>
        <a href="" onClick={(e) => {
          e.preventDefault();
          setIsOpen((prevState) => ({ ...prevState, isSign: false }))
        }} >Create Account</a>
      </div>
    </div>
  )
}