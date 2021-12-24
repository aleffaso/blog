const express = require('express');
const router = express.Router();

router.get("/articles", (req,res) => { 
    res.send("article route")
});

router.get("/admin/articles/new", (req,res) => { 
    res.send("Create new article route")
});

module.exports = router;