const express = require('express');
const router = express.Router();

router.get("/categories", (req,res) => { 
    res.send("Category route")
});

router.get("/admin/categories/new", (req,res) => { 
    res.send("Create new category route")
});

module.exports = router;