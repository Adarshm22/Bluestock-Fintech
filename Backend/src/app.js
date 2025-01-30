import express from "express"

const app = express();

app.use(express.json());
app.use(express.static("public"));



// import for router
import UserRoutes from './Routers/User.Routers.js'
import IpoRoutes from './Routers/Ipo.Routers.js'

app.use("/api/v1/users",UserRoutes);
app.use("/api/v1/ipos", IpoRoutes)

export default app;
