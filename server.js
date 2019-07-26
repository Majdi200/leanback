require("dotenv").config();
require("./config/db-connection");
require("./config/passport");
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const app = express();

const corsConfig = { credentials: true, origin: process.env.FRONT_URL };
app.use(cors(corsConfig));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Test Route
app.get("/", (req, res) => {
  res.send("SERVER IS ONLINE");
});

//authenticating route
const authRoute = require("./auth/auth");
app.use("/auth", authRoute);

//api routes
const userAPI = require("./api/user");
app.use("/api/users", userAPI.router);

const chapterAPI = require("./api/chapter");
app.use("/api/chapter", chapterAPI.router);

const postEmail = require("./config/nodmailer");
app.use("/post", postEmail);

app.listen(process.env.PORT, () => {
  console.log("App hosted on: ", process.env.SITE_URL);
});
