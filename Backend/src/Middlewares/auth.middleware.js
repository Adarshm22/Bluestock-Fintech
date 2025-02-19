import { User } from "../models/userModel.js";
import { AsyncHandeller } from "../Utils/AsyncHandeller.js";
import jwt from "jsonwebtoken";

export const verifyJwt = AsyncHandeller(async (req, res, next) => {
  const Token = req.header("Authorization")?.replace("Bearer ", "");
  if (!Token) {
    return res.status(400).json({
      message: "UnAuthorized user :: Token not avaliable",
    });
  }

  const decodedTokenResponse = jwt.verify(
    Token,
    process.env.ACCESS_TOKEN_SECRET_KEY
  );

  const user = await User.findOne({ _id: decodedTokenResponse?._id }).select(
    "-password"
  );

  if (!user) {
    return res.status(400).json({
      message: "Invalid user Token",
    });
  }

  req.userData = user;
  next();
});
