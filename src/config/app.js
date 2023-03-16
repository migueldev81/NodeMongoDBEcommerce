import express from "express";
import morgan from "morgan";
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
//Routes
import ApiRoutes from '../routes/api.routes.js'


app.use('/api', ApiRoutes)

export default app;