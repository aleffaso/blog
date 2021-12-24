const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const connection = require("./db/db")
const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

//View engine
app.set('view engine', 'ejs');

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

app.use("/", categoriesController);
app.use("/", articlesController);

//main page
app.get('/', (req,res) => {
    res.render("index")
});

app.listen(3000, () => {
    console.log("Server is running")
});