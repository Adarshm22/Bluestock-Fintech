import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./db/index.js";
import { ErrorHandeller } from "./Utils/ErrorHandeller.js";

dotenv.config({
  path: "../.env",
});

app.use(ErrorHandeller)
const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("server is running at : ", PORT);
    });
  })
  .catch((err) => {
    console.log("MongoDb connection failed", err);
  });
