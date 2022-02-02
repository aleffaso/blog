const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const connection = require("./db/db")
const router = require("./config/routes"); // organize routes
const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");
const usersController = require("./users/UsersController");

dotenv.config({path: './.env'})

//View engine
app.set('view engine', 'ejs');

//Sessions
app.use(session({
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: false
}))

//Static
app.use(express.static('public'));

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//database connection
connection.authenticate().then(() => {
    console.log("connection success");
}).catch((error) => {
    console.log(error);
});

// routes
app.use("/", articlesController);
app.use("/", categoriesController);
app.use("/", usersController);
app.use("/", router)

//server
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running")
});