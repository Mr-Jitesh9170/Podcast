import { Register } from "../models/register.js";



//  Register  (Post Route) => 
export const signup = async (req, res) => {
  try {
    let register = new Register(req.body);
    await register.save();
  } catch (error) {
    console.log("Sign up failed --> ", error)
  }
}


// Login (Post Route) => 
export const signin = async (req, res) => {
  try {
    let { email, password } = req.body;
    let userData = await Register.findOne({ email: email });
    if (email === userData.email) {
      if (password === userData.password) {
        let { name, _id } = userData;
        res.json({ id: _id.toString(), name: name })
      }
      else
        console.log = ("password is wrong")
    }
    else
      console.log("create Your account first!")
  } catch (error) {
    console.log("Sign in Failed --> ", error);
  }
}

