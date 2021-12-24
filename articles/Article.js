const Sequelize = require("sequelize");
const connection = require("../db/db");
const Category = require("../categories/Category")

const Article = connection.define('articles', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Category.hasMany(Article); // relation 1=>N with table
Article.belongsTo(Category); //relation 1=>1 with table

Article.sync({force:false}).then(() => {}); //Create table in case of it dos not exist

module.exports = Article;