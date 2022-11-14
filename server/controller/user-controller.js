import user from "../model/user-schema.js";

export const userSignup = async (req, res) => {
  try {
    const exist = await user.findOne({ userName: req.body.userName });
    if (exist) {
      return res.status(401).json({
        message: "Username already exist",
      });
    }
    const user_1 = req.body;
    const newUser = new user(user_1);
    await newUser.save();
    res.status(200).json({ message: user_1 });
  } catch (error) {
    res.status(500).json({ message: error.json });
  }
};

export const userLogin = async (req, res) => {
  try {
    const unsername = req.body.user_name;
    const password = req.body.password1;

    let user11 = await user.findOne({
      userName: unsername,
      password: password,
    });
    if (user11) {
      res.send({ data: user11 });
    } else {
      res.send({
        data: {
          userName: unsername,
          password: password,
        },
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.json });
  }
};
// export default userSignup;
// export default userLogin;
