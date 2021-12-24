const Sequelize = require("sequelize");
const connection = require("../db/db");

const Category = connection.define('categories', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Category.sync({force:false}).then(() => {}); //Create table in case of it dos not exist

module.exports = Category;