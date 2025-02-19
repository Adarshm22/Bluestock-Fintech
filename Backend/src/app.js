import express from "express"
import cors from 'cors'

const app = express();
const corsOption = {
    Credentials:true,
    origin:["http://localhost:5173"]
}

app.use(express.json());
app.use(express.static("public"));
app.use(cors(corsOption))


// import for router
import UserRoutes from './Routers/User.Routers.js'
import IpoRoutes from './Routers/Ipo.Routers.js'

app.use("/api/v1/users",UserRoutes);
app.use("/api/v1/ipos", IpoRoutes)

export default app;
