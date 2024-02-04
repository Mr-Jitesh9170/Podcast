// Get route => 
export const registerUser = (req, res) => {
  console.log("data from frontend --> ", req.body.data);
  res.send("I am server but I am not working why JItesh pandey ")

}

export const loginUser = (req, res) => {
  console.log("data from frontend --> ", req.body.data);
  res.send("I am login user !")

}