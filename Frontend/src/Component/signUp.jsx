import "../Scss-files/Login.scss"
import GoogleIcon from "../Assets/google.webp"
import axios from "axios"
import { DashboardIcons } from "../AllData/data"
import { useState } from "react"
export const SignUp = ({ setIsOpen }) => {
  const [signUpData, setSignData] = useState({
    name: "",
    email: "",
    password: ""
  })

  // API call =>
  const userSignUp = async (data) => {
    try {
      let respone = await axios.post("http://localhost:8080/register/user", { data });
      console.log("data send to backend -->", respone)
    } catch (error) {
      console.log(error);
    }
  }

  // Input data =>
  const handleChange = (e) => {
    let { name, value } = e.target;
    setSignData((prevState) =>
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
    let { name, email, password } = signUpData;
    if (name === "" || email === "" || password === "")
      alert("Please enter all fileds")
    else
      userSignUp({ name, email, password });
  }

  return (
    <div className="logIn-container">
      <div className="log-top1">
        <span>Sign Up</span>
        <span onClick={() => setIsOpen((prevState) => ({ ...prevState, isSign: false }))}>{DashboardIcons.crossIcon}</span>
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
        <input type="name" value={signUpData.name} name="name" placeholder="enter name" onChange={handleChange} />
        <input type="email" value={signUpData.email} name="email" placeholder="enter email" onChange={handleChange} />
        <input type="password" value={signUpData.password} name="password" placeholder="enter password" onChange={handleChange} />
      </div>
      <button onClick={handleSubmit}>Create Account</button>
      <div className="log-top5">
        <span>Already have an account ?</span>
        <a href="">Sign In</a>
      </div>
    </div>
  )
}