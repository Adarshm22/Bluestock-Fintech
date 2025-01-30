import { User } from "../Models/userModel.js";
import { AsyncHandeller } from "../Utils/AsyncHandeller.js";
import { ApiResponse } from "../Utils/ApiResponse.js";

const Registration = AsyncHandeller(async (req, res, next) => {
  const { fullName, email, password } = req.body;

  if ([fullName, email, password].some((Credential) => Credential === "")) {
    return next({
      status: 400,
      message: "All Fields are Required",
    });
  }

  const UserAlreadyExist = await User.findOne({ email });

  if (UserAlreadyExist) {
    return next({
      status: 400,
      message: "email already exist",
    });
  }

  const createdUser = await User.create({
    fullName,
    email,
    password,
  });

  if (!createdUser) {
    return next({
      status: 400,
      message: "Registration Failed.Try again",
    });
  }

  return res
    .status(200)
    .json(new ApiResponse(200, createdUser, "User Registration Successful"));
});

const Login = AsyncHandeller(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next({
      message: "All Fields are requried",
    });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return next({
      message: "User Not Exist",
    });
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  console.log(isPasswordValid);
  if (!isPasswordValid) {
    return next({
      message: "Password is Invalid",
    });
  }

  const AccessToken = user.generateAccessToken();

  if (!AccessToken) {
    console.log("AccessToken generation failed");
    return next({ message: "Invalid Error occurs" });
  }

  return res
    .status(200)
    .json(new ApiResponse(200, { AccessToken }, "Login Successfull"));
});

export { Registration, Login };
