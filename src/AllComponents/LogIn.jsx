import "../Scss-files/Login.scss"
import { DashboardIcons } from "../AllData/data"
export const Logout = () => {
  return (
    <div className="logIn-container">
      <div className="log-top1">
        <span>Sign In</span>
        <span>{DashboardIcons.crossIcon}</span>
      </div>
      <div className="log-top2">
        <span>😀</span>
        <span>Sign in with Google</span>
      </div>
      <div className="log-top3">
        <span></span>
        <div>or</div>
        <span> </span>
      </div>
      <div className="log-top4">
        <input type="email" placeholder="enter email" />
        <input type="password" placeholder="enter password" />
        <a href="">forgot password ?</a>
      </div>
      <button>Sign In</button>
      <div className="log-top5">
        <span>don't have an account ?</span>
        <a href="">Create Account</a>
      </div>
    </div>
  )
}