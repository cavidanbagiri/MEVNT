import express from "express";
const app = express();

//Dotenv and DB Loaders
import "./config/index.js";
import "./loaders/db.js";
import cors from "cors";

import cookieParser from "cookie-parser";

//********************************************************Session
import session from "express-session";
app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
//**************************************************************

//Import Routers
import { UserRouter, ProductRouter } from "./routes/index.js";

//User Express Json
app.use(express.json());
app.use(cookieParser());
//Use Cors
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

//Get Routers
app.use("/user", UserRouter);
app.use("/product", ProductRouter);

app.listen(3000, () => {
  console.log("listening");
});
