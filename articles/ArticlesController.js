const express = require('express');
const router = express.Router();
const slugify = require("slugify");
const Category = require("../categories/Category");
const Article = require("./Article");


router.get("/admin/articles", (req,res) => { 
    Article.findAll({
        include: [{model: Category}] //include Category table
    }).then(articles => {
        res.render("admin/articles/index", {articles: articles});
    })
});

router.get("/admin/articles/new", (req,res) => { 
    Category.findAll().then(categories => {
        res.render("admin/articles/new", {categories: categories});
    });
});

router.post("/articles/save", (req,res) => {
    var title = req.body.title;
    var body = req.body.body;
    var category = req.body.category;

    Article.create({
        title: title,
        slug: slugify(title),
        body: body,
        categoryId: category
    }).then(() => {
        res.redirect("/admin/articles");
    });
});

router.post("/articles/delete", (req, res) => {
    var id = req.body.id;
    if(id != undefined){
        if(!isNaN(id)){ //is it a number or not?
            Article.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/admin/articles");
            });
        }else{
            res.redirect("/admin/articles");
        }
    }else{
        res.redirect("/admin/articles");
    }
});

router.get("/admin/articles/edit/:id", (req,res) => {
    var id = req.params.id;

    if(isNaN(id)){
        res.redirect("/admin/articles");
    };

    Article.findByPk(id).then(article => { //Search article by its ID
        if(article != undefined){

            res.render("admin/articles/edit", {article: article});

        }else{
            res.redirect("/admin/articles");
        }
    }).catch(err => {
        res.redirect("/admin/articles");
    });
});

router.post("/articles/update", (req,res) => {
    var id = req.body.id;
    var title = req.body.title;
    var body = req.body.body;

    Article.update({title: title, slug:slugify(title), body: body},{ //Update title, slug and body by specified id
        where: {
            id:id
        }
    }).then(() => {
        res.redirect("/admin/articles");
    })
});

module.exports = router;