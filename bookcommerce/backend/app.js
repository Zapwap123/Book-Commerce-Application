const express = require("express"),
  app = express(),
  PORT = process.env.PORT || 6080;

//For interacting with mongoDB
const mongoose = require("mongoose");

//Make .env file accessible
const dotenv = require("dotenv");

//Import cors to prevent access from unknown links
const cors = require("cors");

const fileUpload = require("express-fileupload");

// const DB = require("./Config/DBConection");

//Directories for Routing the application
const userRegistration = require("./routers/registration");
const userLogin = require("./routers/login");
const userLogout = require("./routers/logout");
const addToBookList = require("./routers/addBook");
const updateBookList = require("./routers/updateBook");
const deleteFromBookList = require("./routers/deleteBook");
const getBookList = require("./routers/listOfBooks");
const addBookToCart = require("./routers/addToCart");
const cartHistoryOfUsers = require("./routers/userCartHistory");
const userVerification = require("./routers/userDetails");
const singleBook = require("./routers/singleBook");

//Config for .env file
dotenv.config();

// connect to mongoDB
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_DATABASE_NAME}.xnitvce.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("MongoDB Connected successfully");
});

//These functions would be applied to any incoming request regardless of the path
app.use(fileUpload());

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:8080",
      "http://localhost:8081",
    ],
    credentials: true,
  })
);

// var publicDir = require("path").join(__dirname, "uploads");
// app.use(express.static("/upload", publicDir));
app.use("/api/upload", express.static("routers/uploads"));

// app.use(express.static("public"));

// Api Routes for accessing the all services
app.use("/api/register", userRegistration);
app.use("/api/login", userLogin);
app.use("/api/logout", userLogout);
app.use("/api/addbook", addToBookList);
app.use("/api/bookupdate", updateBookList);
app.use("/api/deletebook", deleteFromBookList);
app.use("/api/allbooks", getBookList);
app.use("/api/addtocart", addBookToCart);
app.use("/api/carthistory", cartHistoryOfUsers);
app.use("/api/user", userVerification);
app.use("/api/book/:id", singleBook);

app.listen(PORT, () => console.log("Listening on port " + PORT));
