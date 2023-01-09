import express from "express";

// Dotenv and DB Loaders
import "./config/index.js";
import "./loaders/db.js";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler.js";
import cookieParser from "cookie-parser";

//* *******************************************************Session
import session from "express-session";
//* *************************************************************

// Import Routers
import { UserRouter, ProductRouter } from "./routes/index.js";

const app = express();
app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  })
);

// Using Static Files
app.use(express.static("public"));

// User Express Json
app.use(express.json());
app.use(cookieParser());
// Use Cors
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173"
  })
);

// Get Routers
app.use("/user", UserRouter);
app.use("/product", ProductRouter);

// Error Handler
app.use(errorHandler);

// Start Node Project
app.listen(3000, () => {
  console.log("listening");
});
